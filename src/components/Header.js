import React from 'react';
import '../style/Header.css'

export default class Header extends React.Component {

   getLogin() {
  	return (
		<div className="login">
			<a href="https://news.ycombinator.com/login?goto=news">login</a>
		</div>
  	);
  }

  render() {
    return (
        <div className="header clearfix">
          <h1>Top Stories</h1>
          {this.getLogin()}
        </div>
        );
  }
}