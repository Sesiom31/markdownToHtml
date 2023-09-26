import React from 'react'
import Header from './Header'

function Previewer({}) {
  return (
    <div className='container-preview'>
      <Header isExpande={true} title='Previewer' />
      <div id='preview'></div>
      </div>
  )
}

export default Previewer