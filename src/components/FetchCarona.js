import React, { Component } from 'react'
import Moment from 'react-moment'
import ChartC from './ChartC'

export default class FetchCarona extends Component {

  state = {
    confirmed: '',
    recovered: '',
    deaths: '',
    worldWideTime: '',
  }

  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(data => this.setState({confirmed: data.confirmed.value, recovered: data.recovered.value, deaths: data.deaths.value, worldWideTime: data.lastUpdate}))
  }

  render() {
    return (
      <div className='worldContainer'>
        <h1>WorldWide</h1>
        <h3>Confirmed Cases: <span className='green'>{this.state.confirmed.toLocaleString()}</span></h3>
        <h3>Recovered: <span className='yellow'>{this.state.recovered.toLocaleString()}</span></h3>
        <h3>Deaths: <span className='red'>{this.state.deaths.toLocaleString()}</span></h3>
        
        <ChartC confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths}/>
        <strong>Updated:</strong> <Moment format="MM-DD-YYYY h:mm:a">
                {this.state.worldWideTime}
            </Moment>
      </div>
    )
  }
}

