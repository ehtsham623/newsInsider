import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, description, image, url } = this.props;
    return (
      <div className="card my-3">
        <img
          src={
            image == null
              ? "https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png"
              : image
          }
          className="card-img-top"
          alt="pic pac"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-sm btn-primary">
            View details
          </a>
        </div>
      </div>
    );
  }
}
