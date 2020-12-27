import React, { Component } from "react";
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";

class CurrentWeatherCard extends Component {
  render() {
    let weather = this.props.data;
    return (
      <div style={{ width: "70vw", margin: "auto" }}>
        <div style={{ color: "#eb6e4b", fontSize: 20, fontWeight: "bold" }}>
          Today, {new Date().toDateString()}
        </div>
        <Card style={{ padding: "20px", margin: "20px 0" }} elevation={5}>
          <div style={{ fontSize: 20, fontWeight: 900, marginTop: 8 }}>
            {weather.name},{weather.sys.country}
          </div>
          <div>Sunrise : {new Date(weather.sys.sunrise).toLocaleString()}</div>
          <div>Sunset : {new Date(weather.sys.sunset).toLocaleString()}</div>

          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs="3" sm="2" style={{ margin: 10 }}>
              <div>Temperature</div>
              <div>{weather.main.temp}</div>
            </Grid>
            <Grid item xs="3" sm="2" style={{ margin: 10 }}>
              <div>Min Temperature</div>
              <div>{weather.main.temp_min}</div>
            </Grid>
            <Grid item xs="3" sm="2" style={{ margin: 10 }}>
              <div>MAx Temperature</div>
              <div>{weather.main.temp_max}</div>
            </Grid>
            <Grid item xs="3" sm="2" style={{ margin: 10 }}>
              <div>Pressure</div>
              <div>{weather.main.pressure}</div>
            </Grid>
            <Grid item xs="3" sm="2" style={{ margin: 10 }}>
              <div>Humidity</div>
              <div>{weather.main.humidity}</div>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default CurrentWeatherCard;
