import React, { Component } from "react";

export default class LatestNews extends Component {
  state = {
    apiKey: "70cfd30c73a14774addbd444b2783dc8",
    articles: [],
  };

  componentDidMount = async () => {
    await fetch(
      "https://newsapi.org/v2/everything?" +
        "qInTitle=Coronavirus&" +
        "language=en&" +
        "sortBy=publishedAt&" +
        "pageSize=12&" +
        "excludeDomains=freerepublic.com, otcmarkets.com, energycentral.com&" +
        "apiKey=70cfd30c73a14774addbd444b2783dc8"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ articles: data.articles });
      });
  };

  render() {
    console.log(this.state.articles);
    const stuff = this.state.articles.map(item => {
      return (
        <div key={item.title}>
          <a target='blank' href={item.url}>
            <img className="articleImage" src={item.urlToImage} />
            <h2>
              {item.title.length > 100
                ? `${item.title.substring(0, 100)}...`
                : item.title}
            </h2>
            <p>
              {item.description.length > 200
                ? `${item.description.substring(0, 200)}...`
                : item.description}
            </p>
          </a>
        </div>
      );
    });
    return <div className="newsContainer">
      {stuff}
      </div>;
  }
}
