import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton, ListItemText, Select, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import FormControl from '@material-ui/core/FormControl/FormControl';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import * as H from "history";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/cart/cartActions';
import { IState } from '../state/store';
import Button from '@material-ui/core/Button/Button';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			marginBottom: theme.spacing(2),
			display: 'flex',
			justifyContent: 'space-between'
		},
		albumCover: {
			width: 70,
			height: 70,
			borderRadius: '4px',
			marginRight: theme.spacing(2)
		},
		albumTitle: {
			display: 'inline',
			fontSize: '1.2rem'
		},
        quantity: {
            minWidth: 120
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 80
		},
		flex: {
			flex: '1'
		}
	})
);

interface Props {
	match: any;
	location: H.Location;
	history: H.History;
}

const CartDetails: React.FC<Props> = ({ match, location, history }) => {
	const classes = useStyles();

	const albumId = match.params.id;
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: IState) => state.cart);

    const removeFromCartHandler = (id?: string) => {
        // dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
	}

    useEffect(() => {
        if(albumId) {
            dispatch(addToCart(albumId, quantity));
        }
    }, [dispatch, albumId, quantity]);


    return (
		<>
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<div className={classes.header}>
					<Typography component="h5" variant="h5">Shopping Cart ({cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)})</Typography>
					<Button variant="contained" color="primary" disableElevation>
						Proceed to checkout
						${cartItems.reduce((acc, item) => acc + item.quantity * item.album.price, 0).toFixed(2)}
					</Button>
				</div>
				{cartItems.length ? (
					<List>
						{cartItems.map((cartItem, index) => (
							<div key={index}>
								<Divider component="li" />
								<ListItem>
									<ListItemAvatar>
										<Avatar className={classes.albumCover} alt={cartItem.album.name} src={cartItem.album.image} />
									</ListItemAvatar>
									<ListItemText
										className={classes.flex}
										primary={cartItem.album.name}
										secondary={
											<React.Fragment>
												<Typography component="span" variant="body1" color="textPrimary"></Typography>
												{cartItem.album.artist}
												
											</React.Fragment>
										}
									/>
									<Typography component="span" variant="body1" color="textPrimary" className={classes.flex}>
										${cartItem.album.price}
									</Typography>
									<FormControl className={classes.formControl}>
										<Select
										value={cartItem.quantity}
										onChange={ (e) =>dispatch(addToCart(cartItem.album._id, Number(e.target.value))) }
										displayEmpty
										inputProps={{ "aria-label": "Without label" }}
										>
											{[...Array(cartItem.album.countInStock).keys()].map(count => (
												<MenuItem value={count + 1} key={count + 1}>{count + 1}</MenuItem>
											))}
										</Select>
									</FormControl>
									<IconButton aria-label="delete" onClick={() => removeFromCartHandler(cartItem.album._id)}>
										<DeleteIcon />
									</IconButton>
								</ListItem>
							</div>
						))}
					</List>
				) : (
					<Typography variant="h5" component="h2">Your cart is empty</Typography>
				)}
			</Grid>
		</Grid>
		</>
    )
}

export default CartDetails
