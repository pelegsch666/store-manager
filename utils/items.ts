import { Item } from "./types/types";

export const items: Item[] = [
    {
        id: '1',
        name: 'Tomato',
        catalogNumber: 1,
        itemDescription: 'Red tomato',
        itemType: 'vegetable',
        date: new Date().toLocaleDateString('en-GB')
    },
    {
        id: '2',
        name: 'Cucumber',
        catalogNumber: 2,
        itemDescription: 'Green cucumber',
        itemType: 'vegetable',
        date: new Date()}
]