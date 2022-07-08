// import React from 'react';
import React, { Component } from 'react';
// import img2 from './components/notfound.png'

export default class NewsItem extends Component {
  name = 'Author : ';
  render() {
    let { title, desc, urltoimage, url, author } = this.props;
    return (
      <div className="Box">
        <div className="img-box">
          <img
            src={!urltoimage ? './images/notfound.png' : urltoimage}
            alt="Image not found "
          />
        </div>

        <div className="box-body">
          <h5 className="title">{title}..</h5>
          <p className="desc">{desc}...</p>
          <p style={{ color: 'grey' }} className="author  ">
            {this.name} {author}{' '}
          </p>
          <a href={url} rel="noopener" target="_blank">
            Read More{' '}
          </a>
        </div>
      </div>
    );
  }
}
