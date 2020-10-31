import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ICartItem } from '../models/cartModel';
import SnackbarMessage, { severity } from './SnackbarMessage';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { IconButton, InputBase, ListItemText, Select, Typography, withStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			
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
		title: {
			marginBottom: theme.spacing(2)
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120
		},
		deleteItem: {
			marginTop: 10
		}
	}),
);

interface Props {
    cartItems: ICartItem[];
}

const CartDetails: React.FC<Props> = ({ cartItems }) => {
	const classes = useStyles();

	const [quantity, setQuantity] = useState(1);

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setQuantity(event.target.value as number);
	};

    return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={8}>
				<Typography component="h4" variant="h4" className={classes.title}>Shopping Cart</Typography>
				{cartItems.length ? (
					<List>
						{cartItems.map(cartItem => (
							<div key={cartItem.album._id}>
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar className={classes.albumCover} alt={cartItem.album.name} src={cartItem.album.image} />
									</ListItemAvatar>
									<ListItemText
										primary={cartItem.album.name}
										secondary={
											<React.Fragment>
												<Typography component="span" variant="body1" color="textPrimary"></Typography>
												${cartItem.album.price}
											</React.Fragment>
										}
									/>
									<FormControl variant="outlined" className={classes.quantity}>
										<InputLabel id="quantity">Quantity</InputLabel>
										<Select
											labelId="quantity"
											value={quantity}
											onChange={handleChange}
											label="Quantity"
										>
											{[...Array(cartItem.album.countInStock).keys()].map(count => (
												<MenuItem value={count + 1} key={count + 1}>{count + 1}</MenuItem>
											))}
										</Select>
									</FormControl>
									<IconButton aria-label="delete" className={classes.deleteItem}>
										<DeleteIcon />
									</IconButton>
								</ListItem>
								<Divider component="li" />
							</div>
						))}
					</List>
				) : (
					<Typography variant="h5" component="h2">Your cart is empty</Typography>
				)}
			</Grid>
		</Grid>
    )
}

export default CartDetails
