import axios from 'axios'
import React, { createContext, useState } from 'react'

const ClimaContext = createContext()

const WeatherProvider = ({ children }) => {

    console.log(import.meta.env.VITE_API_KEY)

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado] = useState({})

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async (datos) => {
        try {
            const {ciudad, pais} = datos
            const appId = import.meta.env.VITE_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
            // console.log(url)
            const {data} = await axios(url)
            const {lat, lon} = data.coord
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const {data: clima} = await axios(urlClima)
            console.log(clima)
            setResultado(clima)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    WeatherProvider
}

export default ClimaContext