import React, { Component } from "react";
import Loader from "../shared/Loader";
import NewsItem from "./NewsItem";

export default class News extends Component {
  news = [];
  loadingNews = false;

  constructor() {
    super();
    this.state = {
      news: [],
      loadingNews: false,
    };
  }
  async componentDidMount() {
    this.setState({ loadingNews: true });
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=315da83e20f74921abdc06bf674e6870";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      news: parsedData.articles,
      loadingNews: false,
    });
  }
  render() {
    return (
      <div className="container">
        <h3>News - Top Insiders</h3>
        {this.state.loadingNews ? (
          <Loader />
        ) : (
          <div className="row">
            {this.state.news.map((news, index) => {
              return (
                <div className="col-md-4" key={news.url}>
                  <NewsItem
                    title={news.title}
                    description={news.description}
                    image={news.urlToImage}
                    url={news.url}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
