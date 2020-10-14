import React from 'react';
import { IAlbum } from '../models/AlbumModel';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InStock from './InStock';
import Rating from './Rating';
import Tracks from './Tracks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: '4rem'
        },
        flex: {
            display: 'flex'
        },
        media: {
            width: '100%'
        },
        description: {
            margin: '1rem 0',
            lineHeight: '1.6'
        },
        genre: {
            marginRight: theme.spacing(1),
            fontWeight: theme.typography.fontWeightBold
        },
        price: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3)
        },
        addToCart: {
            display: 'flex',
            alignItems: 'center',
        },
        button: {
            marginRight: theme.spacing(2)
        }
    })
);

interface Props {
    album: IAlbum
}


const AlbumDetails: React.FC<Props> = ({ album }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={6}>
                        <div className={classes.flex}>
                            <img
                            className={classes.media}
                            src={album?.image}
                            title="Album image"
                            alt={album.name}
                        />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2">
                        {album?.name}
                    </Typography>
                    <Typography variant="h6" component="p" color="textSecondary">
                        {album?.artist}
                    </Typography>
                    {album.rating && album.numReviews && <Rating rating={album.rating} numReviews={album.numReviews} />}
                    <Typography variant="body1" component="p" color="textSecondary" className={classes.description}>
                        {album?.description}
                    </Typography>
                    <div className={classes.flex}>
                        {album.genres && album?.genres.map((genre: string, index: number) =>
                            <Typography variant="overline" component="p" key={index} className={classes.genre}>
                                {genre}
                            </Typography>
                        )}
                    </div>
                    <Typography variant="h4" component="p" className={classes.price}>
                        ${album?.price}
                    </Typography>
                    <div className={classes.addToCart}>
                        <Button variant="contained" color="primary" disableElevation className={classes.button}>Add To Cart</Button>
                        <InStock countInStock={album?.countInStock} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Tracks tracks={album?.tracks}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AlbumDetails
