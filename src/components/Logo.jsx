import React from 'react'
import LogoImage from './blog.png'

function Logo({width = '100px'}) {
  return (
    <img src={LogoImage} alt="Smiley face" width={width} />
  )
}

export default Logo