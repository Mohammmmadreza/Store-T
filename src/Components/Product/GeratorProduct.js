
import React from 'react'
import Products from './DataProduct'
import ActionAreaCard from './cardproduct'
export default function GeratorProduct() {
  return (
      <div className='container-teachers'>
{Products.map(data=>(
  <ActionAreaCard className='Teach-box' key={data.id} {...data}/>
))}
   </div>
  )
}
