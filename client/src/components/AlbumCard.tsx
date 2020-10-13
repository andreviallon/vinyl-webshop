import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IAlbum } from '../mock/albums';
import Rating from './Rating';
import { Link } from 'react-router-dom';

interface Props {
  album: IAlbum;
}

const useStyles = makeStyles(() =>
    createStyles({
        media: {
            width: '100%',
            objectFit: 'cover'
        }
    })
);

const AlbumCard: React.FC<Props> = ({ album }) => {
    const classes = useStyles();
    return (
        <Link to={`album/${album._id}`} style={{ textDecoration: 'none' }}>
            <Card>
                <img
                    className={classes.media}
                    src={album.image}
                    title="Album image"
                />
                <CardContent>
                    <Typography variant="h6" component="h2">
                        {album.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {album.artist}
                    </Typography>
                    <Typography variant="h6">
                        ${album.price}
                    </Typography>
                    <Rating rating={album.rating} numReviews={album.numReviews} />
                </CardContent>
            </Card>
        </Link>
    )
}

export default AlbumCard
