import React, { useState } from 'react'
import useWeather from '../hooks/useWeather'

const Form = () => {

  const [alerta, setAlerta] = useState('')

  const { busqueda, datosBusqueda, consultarClima } = useWeather()

  const { ciudad, pais } = busqueda

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.values(busqueda).includes('')){
      setAlerta('Todos los campos son obligatorios')
      return
    }
    setAlerta('')
    consultarClima(busqueda)
  }

  return (
    <div className="contenedor">
      {alerta && <p className='alerta'>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" id='ciudad' name='ciudad' onChange={datosBusqueda} value={ciudad} />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais:</label>
          <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
            <option value="">Seleccionar un pais</option>
            <option value="AR">Argentina</option>
            <option value="CL">Chile</option>
            <option value="BR">Brasil</option>
            <option value="US">Estados Unidos</option>
            <option value="ES">España</option>
            <option value="KR">Corea del Sur</option>
          </select>
        </div>
        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  )
}

export default Form