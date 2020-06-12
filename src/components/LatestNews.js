// import React, { Component } from "react";
// import LatestNewsDisplay from './LatestNewsDisplay'

// export default class LatestNews extends Component {
//   state = {
//     apiKey: "70cfd30c73a14774addbd444b2783dc8",
//     articles: [],
//   };

//   componentDidMount = async () => {
//     await fetch(
//       "https://newsapi.org/v2/everything?" +
//         "qInTitle=Coronavirus&" +
//         "language=en&" +
//         "sortBy=publishedAt&" +
//         "pageSize=12&" +
//         "excludeDomains=freerepublic.com, otcmarkets.com, energycentral.com&" +
//         "apiKey=70cfd30c73a14774addbd444b2783dc8"
//     )
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ articles: data.articles });
//       }).catch(err => console.log(err))
//   };

//   render() {

//     return <div className="newsContainer">
//       <LatestNewsDisplay articlesArray = {this.state.articles}/>
//       </div>;
//   }
// }
