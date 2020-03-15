import React, { Component } from "react";
import Moment from "react-moment";
import CountriesChart from './CountriesChart'
import CanadaChart from './CanadaChart'

export default class CountrySelector extends Component {
  state = {
    usaConfirmed: "",
    usaRecovered: "",
    usaDeath: "",
    usaTime: "",
    canadaConfirmed: "",
    canadaRecovered: "",
    canadaDeath: "",
    canadaTime: ""
  };

  componentDidMount = async () => {
    await fetch("https://covid19.mathdro.id/api/countries/USA")
      .then(response => response.json())
      .then(data =>
        this.setState({
          USA: data,
          usaConfirmed: data.confirmed.value,
          usaRecovered: data.recovered.value,
          usaDeath: data.deaths.value,
          usaTime: data.lastUpdate
        })
      );

    await fetch("https://covid19.mathdro.id/api/countries/canada")
      .then(response => response.json())
      .then(data =>
        this.setState({
          canada: data,
          canadaConfirmed: data.confirmed.value,
          canadaRecovered: data.recovered.value,
          canadaDeath: data.deaths.value,
          canadaTime: data.lastUpdate
        })
      );
  };
  render() {
    return (
      <div className="countryContainer">
        <div className="usaContainer">
          <h1>USA</h1>
          <h3>Confirmed Cases: <span className='green'>{this.state.usaConfirmed.toLocaleString()}</span></h3>
          <h3>Recovered: <span className='yellow'>{this.state.usaRecovered.toLocaleString()}</span></h3>
          <h3>Deaths: <span className='red'>{this.state.usaDeath.toLocaleString()}</span></h3>
          <CountriesChart usaRecovered={this.state.usaRecovered} usaConfirmed={this.state.usaConfirmed} usaDeaths={this.state.usaDeath} 
          />
          <strong>Updated:</strong> <Moment format="MM-DD-YYYY h:mm:a">{this.state.usaTime}</Moment>
        </div>
        <div className="canadaContainer">
          <h1>Canada</h1>
          <h3>Confirmed Cases: <span className='green'>{this.state.canadaConfirmed.toLocaleString()}</span></h3>
          <h3>Recovered: <span className='yellow'>{this.state.canadaRecovered.toLocaleString()}</span></h3>
          <h3>Deaths: <span className='red'>{this.state.canadaDeath.toLocaleString()}</span></h3>
          <CanadaChart canadaRecovered={this.state.canadaRecovered} canadaConfirmed={this.state.canadaConfirmed} canadaDeath={this.state.canadaDeath} />
          <strong>Updated:</strong> <Moment format="MM-DD-YYYY h:mm:a">{this.state.canadaTime}</Moment>
        </div>
      </div>
    );
  }
}
