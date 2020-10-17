import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAlbums } from '../actions/albumActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LatestAlbums from '../components/LatestAlbums';
import { RootState } from '../store';
import Loader from '../components/Loader';
import SnackbarMessage, { severity } from '../components/SnackbarMessage';

const useStyles = makeStyles({
	latestArrivals: {
    	marginBottom: '2rem'
  	}
});

const HomePage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { albums, error, loading } = useSelector( (state: RootState) => state.albumList);

    useEffect(() => {
		dispatch(listAlbums());
	}, [dispatch]);

    return (
        <>
            <Typography variant="h4" className={classes.latestArrivals}>
                Latest Arrivals
            </Typography>
			{loading ? (
				<Loader />
			) : error ? (
				<Typography variant="h5">
					<SnackbarMessage severity={severity.ERROR} message={error}/>
				</Typography>
			) : (
				<LatestAlbums albums={albums}/>
			)}
        </>
    )
}

export default HomePage
