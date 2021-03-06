import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IAlbum } from '../models/albumModel';
import Rating from './Rating';
import { Link } from 'react-router-dom';

interface Props {
  album: IAlbum;
}

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            height: '100%'
        },
        media: {
            width: '100%',
            objectFit: 'cover'
        },
        price: {
            margin: '0.5rem 0 0.2rem'
        }
    })
);

const AlbumCard: React.FC<Props> = ({ album }) => {
    const classes = useStyles();
    return (
        <Link to={`album/${album._id}`} style={{ textDecoration: 'none' }}>
            <Card className={classes.card}>
                <img
                    className={classes.media}
                    src={album.image}
                    title="Album image"
                    alt={album.name}
                />
                <CardContent>
                    <Typography variant="h6" component="h2">
                        {album.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {album.artist}
                    </Typography>
                    <Typography variant="h6" className={classes.price}>
                        ${album.price}
                    </Typography>
                    {album.rating && album.numReviews && <Rating rating={album.rating} numReviews={album.numReviews} />}
                </CardContent>
            </Card>
        </Link>
    )
}

export default AlbumCard
