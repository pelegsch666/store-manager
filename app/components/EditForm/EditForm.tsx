import { itemState } from '@/app/atoms/itemsStateAtom';
import { Item } from '@/utils/types/types';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

type EditFormProps = {
  itemToEdit: Item;
  setItemToEdit: React.Dispatch<React.SetStateAction<Item>>;
};

function EditForm({ itemToEdit, setItemToEdit }: EditFormProps) {
  const [items, setItems] = useRecoilState<Item[]>(itemState);
  const [inputs, setInputs] = useState<Item>({
    id: itemToEdit.id,
    name: itemToEdit.name,
    catalogNumber: itemToEdit.catalogNumber,
    itemDescription: itemToEdit.itemDescription,
    itemType: itemToEdit.itemType,
    date: itemToEdit.date,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  function updateObject(objectIndex: number, updatedObject: Item) {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[objectIndex] = updatedObject;
      return updatedItems;
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItemToEdit({ ...itemToEdit, ...inputs });

    const indexOfEditedItem = items.indexOf(itemToEdit);
    updateObject(indexOfEditedItem, inputs);
  };

  return (
    <form
      className="flex flex-col justify-center items-center text-white gap-10"
      onSubmit={handleSubmit}>
      <label className="text-inherit">
        id:
        <input
          className="text-black"
          name="id"
          placeholder={itemToEdit.id}
          onChange={handleChange}
        />
      </label>
      <label className="text-inherit">
        Name:
        <input
          placeholder={itemToEdit.name}
          name="name"
          className="text-black"
          onChange={handleChange}
        />
      </label>
      <label className="text-inherit flex">
        item description:
        <textarea
          placeholder={itemToEdit.itemDescription}
          name="itemDescription"
        />
      </label>
      <label className="text-inherit">
        item type:
        <select className="text-black">
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="field crop">Field Crop</option>
        </select>
      </label>
      <label className="text-inherit">
        catalog number:
        <input
          onChange={handleChange}
          className="text-black"
          type="string"
          name="catalogNumber"
          placeholder={itemToEdit.catalogNumber.toString()}
        />
      </label>
      <label className="text-inherit">
        date:
        <input
          onChange={handleChange}
          type="date"
          className="text-black"
        />
      </label>
      <button className="text-white mb-3">Submit</button>
    </form>
  );
}

export default EditForm;
