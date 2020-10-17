import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AlbumDetails from '../components/AlbumDetails';
import { useDispatch, useSelector }  from 'react-redux';
import { listAlbumDetails } from '../actions/albumActions';
import { RootState } from '../store';
import Loader from '../components/Loader';
import SnackbarMessage, { severity } from '../components/SnackbarMessage';

interface Props {
    id: string;
}

const AlbumPage = ({ match }: RouteComponentProps<Props>) => {
    const dispatch = useDispatch();
    const { album, reviews, error, loading } = useSelector((state: RootState) => state.albumDetails);

    useEffect(() => {
        dispatch(listAlbumDetails(match.params.id));
    }, [dispatch, match]);

    return (
        <>
            {loading ? (
				<Loader />
			) : error ? (
				<SnackbarMessage severity={severity.ERROR} message={error} />
			) : (
				<AlbumDetails album={album} />
			)}
        </>
    )
}

export default AlbumPage
