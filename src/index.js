import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
import './queries.css';

function get(url) {
    return Promise.resolve($.ajax(url));
  }
  
  get('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories) {
      return Promise.all(stories.slice(0, 10).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
    }).then(function(items) {
        ReactDOM.render(
        <App items={items}/>,
        document.getElementById("root")
    );
}).catch(function(err) {
    console.log('error occur', err);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
