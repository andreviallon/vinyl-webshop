import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IAlbum } from '../mock/albums';

interface Props {
  album: IAlbum;
}

const AlbumCard: React.FC<Props> = ({ album }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {album.name}
                </Typography>
                <Typography color="textSecondary">
                    {album.artist}
                </Typography>
                <Typography color="textSecondary">
                    ${album.price}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AlbumCard
