import React from 'react'

const Form = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" id='ciudad' name='ciudad' />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais:</label>
          <select name="pais" id="pais">
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