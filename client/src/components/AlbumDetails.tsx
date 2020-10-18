import React, { useState } from 'react';
import { IAlbum } from '../models/AlbumModel';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InStock from './InStock';
import Rating from './Rating';
import Tracks from './Tracks';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { match } from 'react-router-dom';
import * as H from "history";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: '4rem'
        },
        flex: {
            display: 'flex'
        },
        media: {
            width: '100%'
        },
        description: {
            margin: '1rem 0',
            lineHeight: '1.6'
        },
        genre: {
            marginRight: theme.spacing(1),
            fontWeight: theme.typography.fontWeightBold
        },
        price: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3)
        },
        quantity: {
            marginRight: theme.spacing(2),
            minWidth: 120
        },
        addToCart: {
            display: 'flex',
            alignItems: 'center',
        },
        button: {
            marginRight: theme.spacing(2),
            padding: '0.9rem 1.3rem'
        }
    })
);

interface Props {
    album: IAlbum | undefined;
    history: H.History;
    id: string;
}

const AlbumDetails: React.FC<Props> = ({ album, history, id }) => {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(1);

     const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setQuantity(event.target.value as number);
    };

    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${quantity}`);
        // history.push(`/`);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={6}>
                        <div className={classes.flex}>
                            <img
                            className={classes.media}
                            src={album?.image}
                            title="Album image"
                            alt={album?.name}
                        />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2">
                        {album?.name}
                    </Typography>
                    <Typography variant="h6" component="p" color="textSecondary">
                        {album?.artist}
                    </Typography>
                    {album?.rating && album?.numReviews && <Rating rating={album?.rating} numReviews={album?.numReviews} />}
                    <Typography variant="body1" component="p" color="textSecondary" className={classes.description}>
                        {album?.description}
                    </Typography>
                    <div className={classes.flex}>
                        {album?.genres && album?.genres.map((genre: string, index: number) =>
                            <Typography variant="overline" component="p" key={index} className={classes.genre}>
                                {genre}
                            </Typography>
                        )}
                    </div>
                    <Typography variant="h4" component="p" className={classes.price}>
                        ${album?.price}
                    </Typography>
                    <div className={classes.addToCart}>
                        {album?.countInStock ? (
                            <FormControl variant="outlined" className={classes.quantity}>
                                <InputLabel id="quantity">Quantity</InputLabel>
                                <Select
                                    labelId="quantity"
                                    value={quantity}
                                    onChange={handleChange}
                                    label="Quantity"
                                >
                                    {[...Array(album.countInStock).keys()].map(count => (
                                        <MenuItem value={count + 1} key={count + 1 } >{count + 1}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        ) : ''}
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={!album?.countInStock}
                            disableElevation
                            className={classes.button}
                            onClick={addToCartHandler}
                        >
                            Add To Cart
                        </Button>
                        <InStock countInStock={album?.countInStock} />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Tracks tracks={album?.tracks}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AlbumDetails
