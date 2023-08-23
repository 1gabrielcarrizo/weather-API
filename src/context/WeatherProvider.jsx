import axios from 'axios'
import React, { createContext, useState } from 'react'

const ClimaContext = createContext()

const WeatherProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)
    const [noResultado, setNoResultado] = useState(false)

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async (datos) => {
        setCargando(true)
        setNoResultado(false)
        try {
            const { ciudad, pais } = datos
            const appId = import.meta.env.VITE_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
            const { data } = await axios(url)
            const { lat, lon } = data.coord
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const { data: clima } = await axios(urlClima)
            setResultado(clima)
        } catch (error) {
            setNoResultado('No hay resultado')
        } finally {
            setCargando(false)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                cargando,
                noResultado
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