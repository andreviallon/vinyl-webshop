export enum Genre {
  ALTERNATIVE = 'Alternative',
  BLUES = 'Blues',
  CLASSICAL = 'Classical',
  COUNTRY = 'Country',
  DANCE = 'Dance',
  DISCO = 'Disco',
  ELECTRONIC = 'Electronic',
  FOLK = 'Folk',
  FUNK = 'Funk',
  HIP_HOP = 'Hip-Hop',
  INDIE = 'Indie',
  INSTRUMENTAL = 'Instrumental',
  JAZZ = 'Jazz',
  METAL = 'Metal',
  OPERA = 'Opera',
  POP = 'Pop',
  PROGRESSIVE = 'Progressive',
  SOUL = 'Soul',
  REGGAE = 'Reggae',
  ROCK = 'Rock',
  SOUND_TRACK = 'Sound Track'
}

export interface ITrack {
  name?: string;
  length?: string;
  trackNumber?: number;
}

export interface IAlbum {
  _id?: string;
  name?: string;
  artist?: string;
  tracks?: ITrack[];
  genres?: Genre[];
  image?: string;
  description?: string;
  price?: number,
  countInStock?: number,
  rating?: number,
  numReviews?: number,
}
