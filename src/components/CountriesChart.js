import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';

export default class CountriesChart extends Component {
  render() {
    const state = {
      labels: ['Cases', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#2FDE00',
            '#C9DE00',
            '#B21F00'
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          ],
          data: [this.props.usaConfirmed, this.props.usaRecovered, this.props.usaDeaths ]
        }
      ]
    }
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Corona Stats',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}