import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IAlbum } from '../mock/albums';

interface Props {
  album: IAlbum;
}

const useStyles = makeStyles({
  media: {
    width: '100%',
    objectFit: 'cover'
  },
  price: {
      marginTop: '0.5rem'
  }
});

const AlbumCard: React.FC<Props> = ({ album }) => {
    const classes = useStyles();
    return (
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
                <Typography variant="body2" color="textSecondary">
                    {album.rating} from ${album.numReviews}
                </Typography>
                <Typography variant="h6" className={classes.price}>
                    ${album.price}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AlbumCard
