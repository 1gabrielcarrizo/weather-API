import React, { createContext, useState } from 'react'

const ClimaContext = createContext()

const WeatherProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = (e) => {
        e.preventDefaul()
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda
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