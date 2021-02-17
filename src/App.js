import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')//input value
  const [list, setList] = useState(new Values('#f15025').all(10))//color container
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    //handle error if input is not color hex
    try{
      //generate colors from library base on input
      let colors = new Values(color).all(10) //100% / (10) = 10% each
      //then set to colors list container
      setList(colors)
      console.log(colors);

    } catch(error){
      setError(true)
      console.log(error);
    }

  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="#f15025"
            value={color} 
            onChange={(e)=>setColor(e.target.value)}
            className={`${error?'error' : null}`}
          />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>

      <section className="colors">    
        {
          list.map((color,index) => {
            
            return(
              <SingleColor 
                key={index} 
                {...color} //pass all the props
                index={index} 
                hexColor={color.hex}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default App
