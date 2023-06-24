'use client'
import React, { useState } from 'react';
import { arrangeDate } from '@/utils/helpers/function';
import { ItemState } from '@/utils/types/types';
import { items } from '@/utils/items';
import Link from 'next/link';
import { useRecoilState, useSetRecoilState } from 'recoil'

type Props = {};

const AddItems = (props: Props) => {
  const [item, setItem] = useState({
    name: '',
    itemDescription: '',
    catalogNumber: 0,
    itemType: 'fruit',
    date: arrangeDate().toLocaleDateString('en-GB'),
  });
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    items.push({
        ...item,id: items.length + 1
    });
    
  };

  const onChangeOfDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setItem({ ...item, date: e.target?.valueAsDate });
    }
  };

  return (
    <div className="flex flex-col p-24 justify-center items-center gap-5">
      <h1>Adding Items</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-5">
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
        <label className="mb-3" htmlFor="itemDescription">
          itemDescription:
          </label>
          <textarea
            className="text-black"
            name="name"
            required
            onChange={e => {
              setItem({ ...item, itemDescription: e.target.value });
            }}
          />
        
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
            <option value="field crop">Field Crop</option>
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
        <label>
            {' '}
            Catalog Number:
            <input
                className="text-black"
                type="number"
                name="catalogNumber"
                required
                
                onChange={e => { setItem({ ...item, catalogNumber: Number(e.target.value) }) }}/>
               

        </label>
        <button className="border-red">Send</button>
      </form>
      <Link href='/editItem'>
        Edit Items
      </Link>
    </div>
  );
};

export default AddItems;
