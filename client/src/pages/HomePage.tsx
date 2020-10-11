import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LatestAlbums from '../components/LatestAlbums';

const useStyles = makeStyles({
  latestArrivals: {
    marginBottom: '2rem'
  },
});

const HomePage = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4" className={classes.latestArrivals}>
                Latest Arrivals
            </Typography>
            <LatestAlbums />
        </div>
    )
}

export default HomePage
