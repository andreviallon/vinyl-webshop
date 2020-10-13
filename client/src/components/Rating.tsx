import Typography from '@material-ui/core/Typography';
import React from 'react';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  rating: number;
  numReviews: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    stars: {
        color: theme.palette.warning.light
    },
    numOfReviews: {
        marginLeft: '0.2rem',
        marginBottom: '0.3rem'
    }
  })
);

const Rating: React.FC<Props> = ({ rating, numReviews }) => {
    const classes = useStyles();

    return (
        <div className={classes.flex}>
            <div className={classes.stars}>
                {rating >= 1 ? <Star /> : rating >= 0.5 ? <StarHalf /> : <StarBorder />}
                {rating >= 2 ? <Star /> : rating >= 1.5 ? <StarHalf /> : <StarBorder />}
                {rating >= 3 ? <Star /> : rating >= 2.5 ? <StarHalf /> : <StarBorder />}
                {rating >= 4 ? <Star /> : rating >= 3.5 ? <StarHalf /> : <StarBorder />}
                {rating >= 5 ? <Star /> : rating >= 4.5 ? <StarHalf /> : <StarBorder />}
            </div>
            <Typography variant="subtitle2" color="textSecondary" className={classes.numOfReviews}>
                {numReviews} reviews
            </Typography>
        </div>
    )
}

export default Rating
