import logo from './sun.png';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';
import { WiCloudy } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiRainMix } from "react-icons/wi";


class WeatherApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isFetching: true, 
      showWeekly: false,
      showHourly: false,
      high: 0,
      low: 0,
      feelslike: 0,
      description: "",
      today: this.getDate(),
      image: logo
    }
  }

  //popup modal for weekly forecast
  toggleWeekly(){
    this.setState({showWeekly: !this.state.showWeekly});
  }

  //popup modal for hourly forecast
  toggleHourly(){
    this.setState({showHourly: !this.state.showHourly});
  }

  //submit form
  getCurrent(){
    this.setState({isFetching: false})
    console.log("current is loading")
    const apiKey = "0a6ebe98851dbd7808eb9f98908964cf";
    const url = `https://api.openweathermap.org/data/2.5/weather?id=4891382&appid=${apiKey}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // do stuff with the data
        console.log("Current weather")
        console.log(data);
        var high = data.main.temp_max;
        high = Math.round(high * 9/5 + 32)
        var low = data.main.temp_min; 
        low = Math.round(low * 9/5 + 32)
        var feelslike = data.main.feels_like;
        console.log(feelslike)
        feelslike = Math.round(feelslike * 9/5 + 32);
        var description = data.weather[0].description;
        console.log("Weather!")
        var image = data.weather[0].icon;
        image = `http://openweathermap.org/img/wn/${image}@2x.png`
        console.log(image);
        this.setState({high: high, low: low, feelslike: feelslike, description: description, image: image})
      })
      .catch(() => {
        console.log("Please search for a valid city 😩");
      });
  };

  getDate(){
    // Source: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today
  }

  randomTemp(){
    var today = new Date();
    var month = today.getMonth() + 1;
    // June-August: 80s-90s
    // May: 60-70s
    // March-April: 40s-50s
    // November, December, January-February: 20s-30s
    // September: 40s
    // October: 30s-40s
    var min = 0;
    var max = 0;
    if (month <= 2 || month >= 11){
      min = 20
      max = 39
    }
    else if (month == 10){
      min = 30
      max = 39
    }
    else if (month == 9){
      min = 40
      max = 49
    }
    else if (6 >= month && month <= 8){
      min = 80
      max = 99
    }
    else if (month == 5){
      min = 60
      max = 79
    }
    else if (month == 4 || month == 3){
      min = 40
      max = 59
    }
    else{
      min = 50
      max = 55
    }
    var temp = Math.floor(Math.random() * (max-min)) + min;
    return temp
  }

  render(){

    if (this.state.isFetching)
    {
      this.getCurrent();
    }
    
    return (
      <div className="App">
        <div id="header">
          <h1>E v a n s t o n W e a t h e r</h1>
          <p id="subheader">{this.state.today}</p>
        </div>
        <button onClick={e => this.toggleHourly(e)} id="hourly">Hourly Forecast</button>
        <button onClick={e => this.toggleWeekly(e)} id="weekly">Weekly Forecast</button>
        <header className="App-header">
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={this.state.image} className="App-logo" alt="logo" />
            <div style={{alignItems: "center", justifyContent: "center"}}>
              <h1 style={{fontSize: "xxx-large"}}>{this.state.feelslike}°F</h1>
              <p>
                {this.state.description}
              </p>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <p style={{marginRight: "30px"}}>High: {this.state.high}°F</p>
            <p>Low: {this.state.low}°F</p>
          </div>

          {this.state.showHourly ?
           <div id="hourlyWeather" class="modal">
            <div class="modal-content" style={{margin: "5vh auto"}}>
              <span class="close" onClick={e => this.toggleHourly(e)}>&times;</span>
              <div id="week">
                <table>
                <tr>
                  <td>1:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiDaySunny />Clear</td>
                </tr>
                <tr>
                <td>2:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiCloudy /> Cloudy</td>
                </tr>
                <tr>
                <td>3:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiDayCloudy/>Partly Cloudy</td>
                </tr>
                <tr>
                <td>4:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiDayShowers/>Showers</td>
                </tr>
                <tr>
                <td>5:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiRain/>Rain</td>
                </tr>
                <tr>
                <td>6:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiRain/>Rain</td>
                </tr>
                <tr>
                <td>7:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiRain/>Rain</td>
                </tr>
                <tr>
                <td>9:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiRainMix/>Light Rain</td>
                </tr>
                <tr>
                <td>10:00PM</td>
                  <td>{this.randomTemp()}°F</td>
                  <td><WiRainMix/>Light Rain</td>
                </tr>
              </table>
              </div>
            </div>
            </div> 
            : null
          } 
           
        {this.state.showWeekly ?
        <div id="weeklyWeather" class="modal"> 
        <div class="modal-content">
          <span class="close" onClick={e => this.toggleWeekly(e)}>&times;</span>
          <div id="week">
          <div class="weekday">
              <h1>Sunday</h1>
              <img style={{width: "100px", height: "100px"}} src={`http://openweathermap.org/img/wn/04d@2x.png`} alt="logo" />
              <div class="temp">
                <p>{this.randomTemp()}°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Monday</h1>
              <img style={{width: "100px", height: "100px"}} src={`http://openweathermap.org/img/wn/02d@2x.png`} alt="logo" />
              <div class="temp">
                <p>{this.randomTemp()}°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Tuesday</h1>
              <img style={{width: "100px", height: "100px"}} src={`http://openweathermap.org/img/wn/09d@2x.png`} alt="logo" />
              <div class="temp">
                <p>{this.randomTemp()}°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Wednesday</h1>
              <img style={{width: "100px", height: "100px"}} src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="logo" />
              <div class="temp">
                <p>{this.randomTemp()}°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Thursday</h1>
              <img style={{width: "100px", height: "100px"}} src={`http://openweathermap.org/img/wn/01d@2x.png`} alt="logo" />
              <div class="temp">
                <p>{this.randomTemp()}°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Friday</h1>
              <img style={{width: "100px", height: "100px"}} src={`http://openweathermap.org/img/wn/02d@2x.png`} alt="logo" />
              <div class="temp">
                <p>{this.randomTemp()}°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Saturday</h1>
              <img style={{width: "100px", height: "100px"}} src={`http://openweathermap.org/img/wn/01d@2x.png`} alt="logo" />
              <div class="temp">
                <p>{this.randomTemp()}°F</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        : null
        }
      
        </header>
      </div>
      
      )
  }



}

function App() {

  
  return (
    <div>
      <WeatherApp />
    </div>
    
  );

  
}

export default App;
