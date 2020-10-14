import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AlbumDetails from '../components/AlbumDetails';
import axios from 'axios';

interface Props {
    id: string
}

const AlbumPage = ({ match }: RouteComponentProps<Props>) => {
    const [album, setAlbum] = useState({});

    useEffect(() => {
		const fetchAlbum = async () => {
			const { data } = await axios.get(`/api/albums/${match.params.id}`);
			setAlbum(data);
		};

		fetchAlbum();
    }, [match]);

    const showAlbum = () => album !== undefined ? <AlbumDetails album={album} /> : 'Oops... It seems that there isn\'t any album at this URL';

    return (
        <>
            {showAlbum()}
        </>
    )
}

export default AlbumPage
