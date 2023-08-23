import { useContext } from 'react'
import ClimaContext from '../context/WeatherProvider'

const useWeather = () => {
    return useContext(ClimaContext)
}

export default useWeather