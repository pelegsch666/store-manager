'use client';
import React, { useState } from 'react';
import { items } from '@/utils/items';
import { useRecoilState } from 'recoil';
import { itemState } from '../atoms/itemsStateAtom';
import { Item, ItemState } from '@/utils/types/types';

type Props = {};

const EditItem = (props: Props) => {
  const [items, setItems] = useRecoilState<Item[]>(itemState);
  const [editMode, setEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<Item>({
    id: '',
    name: '',
    catalogNumber: 0,
    itemDescription: '',
    itemType: 'fruit',
    date: '',
  });

  console.log(items);
  const findValueInArray = <T extends keyof Item>(
    array: Item[],
    property: T,
    value: string
  ): Item => {
    return array.find(obj => obj[property] === value);
  };

  const chosenItemToEdit = (itemId: string) => {
    const indexOfItem = +itemId - 1;

    const selectedItem = items[indexOfItem];
    setEditMode(!editMode);
    setItemToEdit(selectedItem);
    return selectedItem;
  };
  const deleteItem = (itemId: string) => {
    const indexOfItemWithItemId = items.findIndex(item => {
      return item.id === itemId;
    });
    const itemsBefore = items.slice(0, indexOfItemWithItemId);
    const itemsAfter = items.slice(indexOfItemWithItemId + 1);

    setItems([...itemsBefore, ...itemsAfter]);
  };

  const handleChange = e => {};

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <ul className="text-white">
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
      </div>
      {editMode && (
        <form className="flex flex-col justify-center items-center text-white">
          <label className='text-inherit'>
            Name:
            <input placeholder={itemToEdit.name} />
          </label>
          <label className='text-inherit flex'>
            item description:
          <textarea placeholder={itemToEdit.itemDescription} />
          </label>
          <input
            placeholder={itemToEdit.date}
            type="date"
          />
          <select>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="field crop">Field Crop</option>
          </select>
        </form>
      )}
    </div>
  );
};

export default EditItem;
// useMemo
