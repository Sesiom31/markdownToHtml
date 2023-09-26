import React, { useRef } from 'react'
import Header from './Header'

function Editor({}) {

  const textRef = useRef(null)
  

  
  return (
    <div className='container-editor'>
      <Header isExpande={true} title='Editor'  />
      <textarea ref={textRef} id='editor' onMouseOver={()=>textRef.current.style = 'red'} ></textarea>
    </div>
  )
}

export default Editor