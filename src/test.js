import React, { Component } from 'react';

class Weather extends Component {
  state = {
    itsRaining: false
  };

  render() {
    return (
      <div>
        <p>Is it Raining today? {this.state.itsRaining ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default Weather;
