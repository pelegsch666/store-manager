'use client';
import React, { useState } from 'react';
import { arrangeDate } from '@/utils/helpers/function';
import { ItemState } from '@/utils/types/types';
type Props = {};

const AddItems = (props: Props) => {
  const [item, setItem] = useState<ItemState>({
    name: '',
    itemDescription: '',
    itemType: 'fruit',
    date: arrangeDate().toLocaleDateString('en-GB'),
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(item);
  };

  const onChangeOfDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setItem({ ...item, date: e.target.valueAsDate });
    }
  };

  return (
    <div className="flex flex-col p-24 ">
      <h1>Adding Items</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col ">
        <label>
          {' '}
          Product Name:
          <input
            className="text-black"
            name="name"
            type="text"
            required
            onChange={e => {
              setItem({ ...item, name: e.target.value });
            }}
          />
        </label>
        <label>
          {' '}
          itemDescription:
          <textarea
            className="text-black"
            name="name"
            required
            onChange={e => {
              setItem({ ...item, itemDescription: e.target.value });
            }}
          />
        </label>
        <label>
          {' '}
          Item Type:
          <select
            className="text-black"
            name="itemType"
            onChange={e => { setItem({ ...item, itemType: e.target.value }); }}
          >
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
            <option value="field corp">Field Corp</option>
          </select>
        </label>

        <label>
          {' '}
          Date of Expiration:
          <input
            className="text-black"
            type="date"
            name="date"
            onChange={onChangeOfDate}
          />
        </label>
        <button className="border-red">Send</button>
      </form>
    </div>
  );
};

export default AddItems;
