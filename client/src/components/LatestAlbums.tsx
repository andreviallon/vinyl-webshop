import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import AlbumCard from './AlbumCard';
import { IAlbum } from '../models/AlbumModel';

interface Props {
	albums: IAlbum[] | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		center: {
			[theme.breakpoints.down('sm')]: {
				justifyContent: 'center'
			}
		}
	})
);

const LatestAlbums: React.FC<Props> = ({ albums }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.center}>
            {albums?.map((album: IAlbum) => (
                <Grid item sm={12} md={6} lg={4} xl={3} key={album._id}>
                    <AlbumCard album={album} />
                </Grid>
            ))}
        </Grid>
    )
}

export default LatestAlbums
