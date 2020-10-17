import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAlbums } from '../actions/albumActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LatestAlbums from '../components/LatestAlbums';
import { RootState } from '../store';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
	latestArrivals: {
    	marginBottom: '2rem'
  	},
  	spinner: {
		width: '150px !important',
		height: '150px !important',
		margin: '4rem auto',
		display: 'block'
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
        <div>
            <Typography variant="h4" className={classes.latestArrivals}>
                Latest Arrivals
            </Typography>
			{loading ? (
				<CircularProgress className={classes.spinner} />
			) : error ? (
				<Typography variant="h5">
					{error}
				</Typography>
			) : (
				<LatestAlbums albums={albums}/>
			)}
        </div>
    )
}

export default HomePage
