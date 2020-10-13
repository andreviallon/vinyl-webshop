import React from 'react';
import { albums } from '../mock/albums';
import { RouteComponentProps } from 'react-router-dom';
import AlbumDetails from '../components/AlbumDetails';

interface Props {
    id: string
}

const AlbumPage = ({ match }: RouteComponentProps<Props>) => {
    const album = albums.find(a => a._id === match.params.id);

    const showAlbum = () => {
        if (album) {
            return <AlbumDetails album={album} />
        } else {
            return 'Oops... It seems that there isn\'t any album at this URL'
        }

    }
    return (
        <div>
            {showAlbum()}
        </div>
    )
}

export default AlbumPage
