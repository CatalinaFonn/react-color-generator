import React, { useState, useEffect } from 'react'
import rgbToHex from './utils' //actually we can use 'hex' provided by the library

const SingleColor = ({rgb, weight, hexColor, index}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',') //returns the array as a string.
  const hex = rgbToHex(...rgb) //fallback to hexColor
  const hexValue = `#${hexColor}`

  console.log(bcg);
  console.log(hexColor);

  //when alert changes, run setTimeout()
  useEffect(()=>{
    let timer = setTimeout(()=>{
      setAlert(false);
    },1000)

    return()=> clearTimeout(timer)

  },[alert])

  return(
    <article
      className={`color ${index > 10 && 'color-light'} `} 
      style={ {backgroundColor: `rgb(${bcg})`} }
      onClick={
        ()=> {
          setAlert(true);
          navigator.clipboard.writeText(hexValue)
        }
      }
    >
      <p className="percent-value">
        {weight}%
      </p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
