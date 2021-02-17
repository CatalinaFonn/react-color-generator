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
      // console.log(colors);
      setError(false)

    } catch(error){
      setError(true)
      console.log(error);
    }

  }

  return (
    <div className="section-wrapper">
      <section className="container">
        <h3>color generator</h3>
        <div className="form-container">
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
          <p className={`error-text ${error?'show-text' : null}`}>
            <span>
              <svg id="error"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#bb2525" width="18px" height="18px">
              <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
            </span>
            Please enter valid value 
          </p>
        </div>
        
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
    </div>
  )
}

export default App
