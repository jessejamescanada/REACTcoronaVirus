import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>Data API provided by -
						<a target="blank" href="https://github.com/mathdroid/covid-19-api">
							 Mathdroid
						</a> News powered by <a target='blank' href='https://newsAPI.org'>NewsAPI.org</a></p>
      </div>
    )
  }
}
