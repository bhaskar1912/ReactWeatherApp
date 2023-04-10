import React, { useState } from 'react'
import axios from 'axios'
const Weather=()=> {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  const searchLocation1=()=>{
      
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        setLocation('')
      
  }

  return (
    <div className="app">
      <div className="search">
        <form onSubmit={(e)=>{
          e.preventDefault()
        }}>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyUp={searchLocation}
          placeholder='Enter Location'
          type="text" />
          <button onClick={searchLocation1} className='btn'>Search</button>
          </form>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h2>{data.name}</h2>
          </div>
          <div className="temp">
            {data.main ? <h2>{((data.main.temp- 32) * 5 / 9).toFixed(2)}°C</h2> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <div>
        
        {data.weather? <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='noimg'/>:null }
         </div>
        </div>
       
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{((data.main.temp- 32) * 5 / 9).toFixed(2)}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{((data.main.temp)*1.6).toFixed()}KM</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}


export default Weather;