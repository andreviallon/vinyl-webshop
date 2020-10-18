import { IAlbum } from "../../models/albumModel";

export type AlbumDetailsState = {
  album?: IAlbum;
  reviews?: [];
  loading: boolean;
  error?: string;
};

export type AlbumDetailsAction = {
  type: string;
  album?: IAlbum;
  reviews?: [];
  error?: string;
};

export type AlbumDetailsDispatchType = (args: AlbumDetailsAction) => AlbumDetailsAction
