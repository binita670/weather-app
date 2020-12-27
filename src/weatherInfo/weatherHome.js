import React, { Component } from "react";
import { WeatherAPI } from "./weatherApi";
import Header from "../header";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import CurrentWeatherCard from "./weatherCard";

class WeatherHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "kathmandu",
      weatherData: {},
      isLoading: true,
      searchCityString: "",
      error: null,
    };
  }
  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData = () => {
    let self = this;
    WeatherAPI.getCurrentWeatherData("Kathmandu")
      .then(function (res) {
        console.log(res.data);
        self.setState({
          weatherData: res.data,
          isLoading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onChangeInputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    let self = this;
    self.setState({ isLoading: true, error: null });
    WeatherAPI.getCurrentWeatherData(this.state.searchCityString)
      .then(function (res) {
        console.log(res.data);
        self.setState({
          weatherData: res.data,
          isLoading: false,
        });
      })
      .catch(function (error) {
        if (error.response.data) {
          self.setState({
            error: error.response.data.message,
            isLoading: false,
          });
        }
      });
  };

  render() {
    return (
      <div>
        <Header />
        <form
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
          onSubmit={this.onSubmitHandler}
        >
          <TextField
            variant="outlined"
            label="Search Place"
            name="searchCityString"
            value={this.state.searchCityString}
            onChange={this.onChangeInputHandler}
            error={this.state.error}
          />
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
        {this.state.error && (
          <p style={{ color: "red", textAlign: "center" }}>
            {this.state.error.toUpperCase()}
          </p>
        )}
        {this.state.isLoading ? (
          <div style={{ width: "100vw", textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <div>
            <CurrentWeatherCard data={this.state.weatherData} />
          </div>
        )}
      </div>
    );
  }
}

export default WeatherHome;
