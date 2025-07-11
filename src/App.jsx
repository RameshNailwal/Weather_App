import { useState } from 'react'
import SearchBar from './Components/SearchBar'
import axios from 'axios'
import WeatherContainer from './Components/WeatherContainer'
import weatherVideo from '../src/assets/weatherVideo.mp4'


function App() {

  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather`
  const weatherApiKey = import.meta.env.VITE_WEATHER_API

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const url = `${weatherApiUrl}?q=${city}&units=metric&appid=${weatherApiKey}`;
      const response = await axios.get(url);
      console.log(response.data, 'response data')
      setWeather(response.data)
    } catch (error) {
      if (error.response && error.status === 404) {
        setError('City Not Found Please Type Correct City....')
      } else {
        setError('Try Again')
      }
      setWeather(null)
    } finally {
      setLoading(false)
    }

  }

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-blue-100 relative overflow-hidden'>
        <video className='absolute top-0 left-0 h-full object-cover' autoPlay muted loop >
          <source src={weatherVideo} type='video/mp4' />
        </video>
        <div className='absolute top-0 left-0 w-full h-full bg-black-300/20 z-1'></div>

        <div className='bg-black/70 text-white rounded-lg shadow-lg p-8 max-w-md z-20 w-full' >


          <h1 className='text-3xl font-bold text-center mb-6'>Weather App</h1>
          <SearchBar fetchWeather={fetchWeather} />
          {loading && <p className='text-center mt-4'>Loading</p>}
          {error && <p className='text-center text-red-600'>{error}</p>}
          {weather && <WeatherContainer weatherInformation={weather} />}
        </div>


      </div>

    </>
  )
}

export default App
