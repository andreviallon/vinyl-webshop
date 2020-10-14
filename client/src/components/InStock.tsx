import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import React from 'react';

interface Props {
    countInStock: number | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        flex: {
            display: 'flex',
            alignItems: 'center'
        },
        dot: {
            width: '0.7rem',
            height: '0.7rem',
            borderRadius: '100px',
            marginRight: theme.spacing(1)
        },
        bold: {
            fontWeight: theme.typography.fontWeightBold,
        },
        available: {
            color: theme.palette.success.main,
        },
        unavailable: {
            color: theme.palette.error.main
        },
        bgAvailable: {
            background: theme.palette.success.main,
        },
        bgUnavailable: {
            background: theme.palette.error.main
        }
    })
);

const InStock: React.FC<Props> = ({ countInStock }) => {
    const classes = useStyles();

    return (
        <div className={classes.flex}>
            <div className={`${classes.dot} ${countInStock ? classes.bgAvailable : classes.bgUnavailable}`}></div>
            <Typography variant="subtitle1" className={`${classes.bold} ${countInStock ? classes.available : classes.unavailable}`}>
                {countInStock ? 'In Stock' : 'Out of Stock'}
            </Typography>
        </div>
    )
}

export default InStock
