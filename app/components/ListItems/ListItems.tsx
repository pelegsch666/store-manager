import React from 'react'
import { useRecoilState } from 'recoil'
import { itemState } from '../../atoms/itemsStateAtom';
import { Item } from '@/utils/types/types';
import { items } from '@/utils/items';
type listItemsProps = {
    items: Item[],
    chosenItemToEdit: (itemId: string) => Item,
    deleteItem: (itemId: string) => void
}

const ListItems = ({items,chosenItemToEdit,deleteItem}: listItemsProps) => {
  return (
    <ul>
     {items.map((item, index) => (
            <li key={item.id}>
              <h4>
                {index + 1}. Name:{item.name}
              </h4>
              <h4>itemDescription:{item.itemDescription}</h4>
              <h4>catalogNumber:{item.catalogNumber}</h4>
              <h4>itemType:{item.itemType}</h4>
              <h4>date:{item.date}</h4>
              <button
                className="text-red-500"
                onClick={() => {
                  deleteItem(item.id);
                }}>
                Delete
              </button>
              <button
                className="text-white"
                onClick={() => chosenItemToEdit(item.id)}>
                Edit
              </button>
            </li>
          ))}




        
    </ul>
  )
}

export default ListItems