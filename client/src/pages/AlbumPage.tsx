import React from 'react';
import { albums } from '../../../server/data/albums';
import { RouteComponentProps } from 'react-router-dom';
import AlbumDetails from '../components/AlbumDetails';

interface Props {
    id: string
}

const AlbumPage = ({ match }: RouteComponentProps<Props>) => {
    const album = albums.find(a => a._id === match.params.id);

    const showAlbum = () => album ? <AlbumDetails album={album} /> : 'Oops... It seems that there isn\'t any album at this URL'
    return (
        <div>
            {showAlbum()}
        </div>
    )
}

export default AlbumPage
