import logo from './sun.png';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

class WeatherApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hourlyClicked: false,
      weeklyClicked: false
    }
  }

  tabClick(){
    if (this.state.hourlyClicked){
      this.setState({ hourlyClicked: false, weeklyClicked: true })
    }
  }

  //submit form
  getCurrent(){
    console.log("current is loading")
    const apiKey = "0a6ebe98851dbd7808eb9f98908964cf";
    const url = `https://api.openweathermap.org/data/2.5/weather?id=4891382&appid=${apiKey}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // do stuff with the data
        console.log(data);
      })
      .catch(() => {
        console.log("Please search for a valid city 😩");
      });
  };

  render(){
    this.getCurrent();

    return (
      <div className="App">
        <div id="header">
          <h1>E v a n s t o n W e a t h e r</h1>
          <p id="subheader">May 26, 2021</p>
        </div>
        <button onclick = "myFunction()" id="hourly"> Hourly Forecast</button>
        <button id="weekly">Weekly Forecast</button>
        <header className="App-header">
          <img style={{width: "10%", height: "10%"}} src={logo} className="App-logo" alt="logo" />
          <p>
            Sunny
          </p>
          <div style={{display: "flex"}}>
            <p style={{marginRight: "30px"}}>High: 76°F</p>
            <p>Low: 63°F</p>
          </div>
          {/* <button id="myBtn" onclick="openModal('weekly')">Open Modal</button> */}
          <div id="hourlyWeather">
            <div class="modal-content">
              <span class="close">&times;</span>
              <div id="week">
                <table>
                <tr>
                  <td>1:00PM</td>
                  <td>57°F</td>
                  <td>Clear</td>
                </tr>
                <tr>
                <td>2:00PM</td>
                  <td>57°F</td>
                  <td>Cloudy</td>
                </tr>
                <tr>
                <td>3:00PM</td>
                  <td>57°F</td>
                  <td>Partly Cloudy</td>
                </tr>
                <tr>
                <td>4:00PM</td>
                  <td>57°F</td>
                  <td>Showers</td>
                </tr>
                <tr>
                <td>5:00PM</td>
                  <td>57°F</td>
                  <td>Rain</td>
                </tr>
                <tr>
                <td>6:00PM</td>
                  <td>57°F</td>
                  <td>Rain</td>
                </tr>
                <tr>
                <td>7:00PM</td>
                  <td>57°F</td>
                  <td>Rain</td>
                </tr>
                <tr>
                <td>9:00PM</td>
                  <td>57°F</td>
                  <td>Light Rain</td>
                </tr>
                <tr>
                <td>10:00PM</td>
                  <td>57°F</td>
                  <td>Light Rain</td>
                </tr>
              </table>
              </div>
            </div>
          </div>  
          <div id="weeklyWeather" >
        <div class="modal-content">
          <span class="close">&times;</span>
          <div id="week">
          <div class="weekday">
              <h1>Sunday</h1>
              <img style={{width: "100px", height: "100px"}} src={logo} alt="logo" />
              <div class="temp">
                <p>High: 76°F</p>
                <p>Low: 63°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Monday</h1>
              <img style={{width: "100px", height: "100px"}} src={logo} alt="logo" />
              <div class="temp">
                <p>High: 76°F</p>
                <p>Low: 63°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Tuesday</h1>
              <img style={{width: "100px", height: "100px"}} src={logo} alt="logo" />
              <div class="temp">
                <p>High: 76°F</p>
                <p>Low: 63°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Wednesday</h1>
              <img style={{width: "100px", height: "100px"}} src={logo} alt="logo" />
              <div class="temp">
                <p>High: 76°F</p>
                <p>Low: 63°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Thursday</h1>
              <img style={{width: "100px", height: "100px"}} src={logo} alt="logo" />
              <div class="temp">
                <p>High: 76°F</p>
                <p>Low: 63°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Friday</h1>
              <img style={{width: "100px", height: "100px"}} src={logo} alt="logo" />
              <div class="temp">
                <p>High: 76°F</p>
                <p>Low: 63°F</p>
              </div>
            </div>
            <div class="weekday">
              <h1>Saturday</h1>
              <img style={{width: "100px", height: "100px"}} src={logo} alt="logo" />
              <div class="temp">
                <p>High: 76°F</p>
                <p>Low: 63°F</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </header>
      </div>
      )
  }



}

function App() {

  
  return (
    <WeatherApp />
  );

  
}

export default App;
