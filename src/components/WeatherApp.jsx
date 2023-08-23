import React from 'react'
import Form from './Form'
import Result from './Result'
import useWeather from '../hooks/useWeather'
import Loading from './Loading'
import Footer from './Footer'

const WeatherApp = () => {

  const { resultado, cargando, noResultado } = useWeather()

  return (
    <>
      <main className="dos-columnas">
        <Form />
        {cargando ? <Loading /> : resultado?.name ? <Result /> : noResultado ? <p className='texto'>{noResultado}</p> : <p className='texto'>El clima se va a mostrar aqui</p>}
      </main>
      <Footer/>
    </>
  )
}

export default WeatherApp