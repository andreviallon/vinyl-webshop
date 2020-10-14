export enum Genre {
  ALTERNATIVE = 'Alternative',
  BLUES = 'Blues',
  CLASSICAL = 'Classical',
  COUNTRY = 'Country',
  DANCE = 'Dance',
  DISCO = 'Disco',
  ELECTRONIC = 'Electronic',
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

export interface Track {
  name?: string;
  length?: string;
}

export interface IAlbum {
  _id?: string;
  name?: string;
  artist?: string;
  tracks?: Track[];
  totalLength?: string;
  genres?: Genre[];
  releaseDate?: string;
  image?: string;
  description?: string;
  price?: number,
  countInStock?: number,
  rating?: number,
  numReviews?: number,
}
