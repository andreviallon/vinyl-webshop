import React from 'react';
import Grid from '@material-ui/core/Grid';
import AlbumCard from './AlbumCard';
import { albums, IAlbum } from '../mock/albums';

const LatestAlbums = () => {
    return (
        <Grid container spacing={3}>
            {albums.map((album: IAlbum) => (
                <Grid item sm={12} md={6} lg={4} xl={3} key={album._id}>
                    <AlbumCard album={album} />
                </Grid>
            ))}
        </Grid>
    )
}

export default LatestAlbums
