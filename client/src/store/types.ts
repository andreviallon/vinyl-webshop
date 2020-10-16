import { IAlbum } from "../models/AlbumModel";

export type AlbumState = {
  albums: IAlbum[];
};

export type AlbumAction = {
  type: string;
  album: IAlbum;
};

export type DispatchType = (args: AlbumAction) => AlbumAction;
