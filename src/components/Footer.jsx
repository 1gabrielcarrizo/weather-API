import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      Copyright &copy; {year}. All rights reserved. <a href="https://www.linkedin.com/in/1gabrielcarrizo/" target='_blank'>Gabriel</a>
    </footer>
  )
}

export default Footer