import React from 'react';
import '../style/Item.css';
import URL from 'url';

export default class Item extends React.Component {

  getDomain() {
		return URL.parse(this.props.item.url).hostname;
  }
  
	getTitle() {
		return (
			<div className="item-title">
				<a href={this.props.item.url}>{this.props.item.title}</a>
        		{ this.props.item.url && <i className="item-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}> ({this.getDomain()})</a></i>}
			</div>
		);
	}

	getComment() {
		var comment = "";
		if(this.props.item.kids && this.props.item.kids.length)
			comment = this.props.item.kids.length + " comments";
		return (
			<a href={"https://news.ycombinator.com/item?id=" + this.props.item.id}>{comment}</a>
		);
	}

	getSubtext() {
		return (
			<div className="item-subtext">
				{this.props.item.score} points by <a href={"https://news.ycombinator.com/user?id=" + this.props.item.by}>{this.props.item.by} </a> | {this.getComment()}
			</div>
		);
	}

	getRank() {
		return (
			<div className="item-order">
				{this.props.rank}.
			</div>
		);
	}

  	render() {
	    return (
	        <div className="item">
            {this.getRank()}
            {this.getTitle()}	                		
	        	{this.getSubtext()}
	        </div>
	    );
  }
  
}