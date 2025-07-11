import React, { useState } from 'react'



const SearchBar = ({ fetchWeather }) => {

    const [city, setCity] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (city.trim()) {
            fetchWeather(city)
            setCity('')
        }
    }
    return (

        <>
            <form className='flex' onSubmit={handleSubmit}>
                <input className='p-2 border-r-0 flex-1 border border-gray-100 rounded-l-lg outline-none' type='text' placeholder='Enter the city name' value={city} onChange={(e) => setCity(e.target.value)} />
                <button className='bg-blue-500 border-l-0 border cursor-pointer rounded-r-lg p-2 hover:bg-blue-600' type='submit' >Search</button>
            </form>
        </>

    )
}

export default SearchBar;