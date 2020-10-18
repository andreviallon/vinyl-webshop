import { IAlbum } from './albumModel';

export interface ICartItem {
    quantity: number;
    album: IAlbum;
}
