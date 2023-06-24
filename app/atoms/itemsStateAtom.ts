import { items } from '@/utils/items';
import { Item } from '@/utils/types/types';
import {atom} from 'recoil';



const initialItemState: Item[] = [...items]   

export const itemState = atom({
    key: 'itemState',
    default: initialItemState,
});
