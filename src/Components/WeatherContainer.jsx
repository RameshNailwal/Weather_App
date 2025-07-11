import React from 'react'

const WeatherContainer = ({ weatherInformation }) => {
    return (
        <>
            <div className='mt-6' >

                <h2 className='text-2xl font-semibold text-center'>{weatherInformation?.name} ,{weatherInformation?.sys.country}</h2>

                <div className='flex justify-center items-center mt-4' >
                    <img className='w-16 h-16' src={`https://openweathermap.org/img/wn/${weatherInformation?.weather[0].icon}@2x.png`} alt={weatherInformation.weather[0]?.description} />

                    <p className='text-4xl font-bold'>
                        {Math.round(weatherInformation?.main?.temp)}°C
                    </p>


                </div>
                <p className='text-center text-gray-400 capitalize'>
                    {weatherInformation?.weather[0]?.description}
                </p>
                <div className='grid grid-cols-2 mt-6 gap-4'>
                    <div className='text-center '>
                        <p className='text-gray-400'>Humidity</p>
                        <p className='font-bold'>{weatherInformation?.main?.humidity}%</p>
                    </div>
                    <div className='text-center '>
                        <p className='text-gray-400'>Wind</p>
                        <p className='font-bold'>{weatherInformation?.wind?.speed} m/s</p>
                    </div>
                    <div className='text-center '>
                        <p className='text-gray-400'>Pressure</p>
                        <p className='font-bold'>{weatherInformation?.wind?.pressure} hPa</p>
                    </div>
                    <div className='text-center '>
                        <p className='text-gray-400'>Feel Like This</p>
                        <p className='font-bold'>{weatherInformation?.wind?.feels_like}°C  </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WeatherContainer