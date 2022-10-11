import React, { useEffect, useState } from 'react'
import './css/style.css'

const Tempapp = () => {
  const [city,setCity] = useState("");
  const [search,setSearch] = useState("New Delhi");

  useEffect( () => {
    const fetchApi = async () =>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9bccea77c2f41ca0eecaa6ecd12e66d6`
      const response = await fetch(url);
      const resp = await response.json();
      setCity(resp.main)
    }
    fetchApi()
  },[search])

  return (
    <>
        <div className='box'>
            <div className='inputData'>
                <input type="search" 
                value={search} className='inputFeild' onChange={(event)=>{
                  setSearch(event.target.value)
                }} />
            </div>
            {!city ? (
              <p>No Data Found</p>
            ): (
              <>
              <div className='info'>
              <h2 className='location'>
                <i className="fa-sharp fa-solid fa-street-view"></i>
              </h2>
              <h1>{search}</h1>
              <h1 className= "temp">
                  {city.temp}°C
              </h1>
              <h3 className='tempmin_max'>
                  Humidity : {city.humidity}%  | Max : {city.temp_max}°C
              </h3>
              <p>Feels like: {city.feels_like}°C</p>
            </div>
            <div className='wave1'></div>
            <div className='wave2'></div>
            <div className='wave3'></div>
            </>
        
            )
            }
          </div> 
    </>
  )
}

export default Tempapp
