import React from 'react'
import { items } from '@/utils/items'
type Props = {}

const ItemsList = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center p-24'>
        <h1>Items List</h1>
        <div >
             <ul className='flex flex-col '>
             {items.map((item, index) => (
                <li key={item.id}> {index + 1}. Product Name:{item.name}</li>
             ))}

             </ul>
            </div>
    </div>
  )
}

export default ItemsList