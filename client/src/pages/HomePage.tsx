import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  latestArrivals: {
    textAlign: 'left'
  },
});

const HomePage = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4" className={classes.latestArrivals}>
                Latest Arrivals
            </Typography>
        </div>
    )
}

export default HomePage
