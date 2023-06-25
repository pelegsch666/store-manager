'use client';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { itemState } from '../atoms/itemsStateAtom';
import { Item } from '@/utils/types/types';
import ListItems from '../components/ListItems/ListItems';
import EditForm from '../components/EditForm/EditForm';
type Props = {};

const EditItem = (props: Props) => {
  const [items, setItems] = useRecoilState<Item[]>(itemState);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [itemToEdit, setItemToEdit] = useState<Item>({
    id: '',
    name: '',
    catalogNumber: 0,
    itemDescription: '',
    itemType: 'fruit',
    date: '',
  });

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

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <ListItems
          items={items}
          chosenItemToEdit={chosenItemToEdit}
          deleteItem={deleteItem}
        />
      </div>
      {editMode && (
        <EditForm
          itemToEdit={itemToEdit}
          setItemToEdit={setItemToEdit}
        />
      )}
    </div>
  );
};

export default EditItem;
// useMemo
