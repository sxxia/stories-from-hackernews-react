import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';

class App extends Component {

  render() {
    return (
        <div className="app">
          <Header />
          <div className="app-item">
            {
              (this.props.items).map(function(item, index) {
                return (
                    <Item key={item.id} item={item} rank={index+1} />
                    );
              })
            }
          </div>
          <h2 className="clearfix"><a href="https://news.ycombinator.com/">More stories...</a></h2>
          <div className="Footer">
          Designed by Shuang Xia 2019.
          </div>
        </div>
        );
  }

}

export default App;
