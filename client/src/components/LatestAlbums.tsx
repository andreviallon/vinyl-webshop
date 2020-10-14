import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import AlbumCard from './AlbumCard';
import { IAlbum } from '../models/AlbumModel';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		center: {
			[theme.breakpoints.down('sm')]: {
				justifyContent: 'center'
			}
		}
	})
);

const LatestAlbums = () => {
    const classes = useStyles();
	const [albums, setAlbums] = useState([]);

    useEffect(() => {
		const fetchAlbums = async () => {
			const { data } = await axios.get('/api/albums');
			setAlbums(data);
		};

		fetchAlbums();
    }, []);

    return (
        <Grid container spacing={3} className={classes.center}>
            {albums.map((album: IAlbum) => (
                <Grid item sm={12} md={6} lg={4} xl={3} key={album._id}>
                    <AlbumCard album={album} />
                </Grid>
            ))}
        </Grid>
    )
}

export default LatestAlbums
