export interface Item {
  id: string;
  name: string;
  catalogNumber: number;
  itemDescription: string;
  itemType: 'vegetable' | 'fruit' | 'field crop';
  date: string;
}

export interface ItemState {
  name: string;
  catalogNumber: (number & { __positiveNumber: true }) | 0;
  itemDescription: string;
  itemType: 'vegetable' | 'fruit' | 'field crop';
  date: string;
}
