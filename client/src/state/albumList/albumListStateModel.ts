import { IAlbum } from './../../models/albumModel';

export type AlbumListState = {
  albums?: IAlbum[];
  loading: boolean;
  error?: string;
};

export type AlbumListAction = {
  type: string;
  albums?: IAlbum[];
  error?: string;
};

export type AlbumListDispatchType = (args: AlbumListAction) => AlbumListAction;
