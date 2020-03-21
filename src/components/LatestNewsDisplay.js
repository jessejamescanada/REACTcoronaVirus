import React, { Component } from 'react'

export default class LatestNewsDisplay extends Component {
  render() {
    const articlesArray = this.props.articlesArray.map(item => {
      return (
        <div key={item.title}>
          <a target='blank' href={item.url}>
            <img className="articleImage" src={item.urlToImage} alt={item.title}/>
            <h2>
              {item.title.length > 100
  ? `${item.title.substring(0, 100)}...`
  : item.title}
            </h2>
            <p>
              {item.description}
            </p>
          </a>
        </div>
      );
    })
    return (
      <div className='newsContainer'>
        {articlesArray}
      </div>
    )
}}
