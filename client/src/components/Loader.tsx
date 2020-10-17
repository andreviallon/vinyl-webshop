import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  	spinner: {
		width: '150px !important',
		height: '150px !important',
		margin: '4rem auto',
		display: 'block'
	}
});

const Loader = () => {
    const classes = useStyles();

    return (
        <CircularProgress className={classes.spinner} />
    )
}

export default Loader
