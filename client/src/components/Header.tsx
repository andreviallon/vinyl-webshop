import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCard from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Badge, Menu, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../state/store';
import { logout } from '../state/user/userActions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
	headerContainer: {
		position: 'fixed',
		top: '0'
	},
    header: {
		display: 'flex',
		justifyContent: 'space-between'
    },
    menuButton: {
	  marginLeft: theme.spacing(1),
	  marginRight: theme.spacing(1)
	},
	menu: {
		marginTop: theme.spacing(2)
	}
  })
);

const Header = () => {
	const classes = useStyles();
	const { cartItems } = useSelector((state: IState) => state.cart);
	const { user } = useSelector((state: IState) => state.userLogin);
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	
	const handleLogout = () => {
		handleClose();
		dispatch(logout());
	};

	return (
		<AppBar className={classes.headerContainer}>
			<Toolbar className={classes.header}>
				<Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
					<Typography variant="h6">
						Vinyl Shop
					</Typography>
				</Link>
				<div>
					<Link to='/cart' style={{ color: 'inherit', textDecoration: 'inherit'}}>
						<Button color="inherit" className={classes.menuButton}>
							Cart
							<Badge badgeContent={cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)} color="secondary">
								<ShoppingCard className={classes.menuButton} />
							</Badge>
						</Button>
					</Link>
					{ user ? (
						<>
							<Button color="inherit" aria-haspopup="true" onClick={handleOpen}>
								{user.name}
								<AccountCircle className={classes.menuButton} />
							</Button>
							<Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} className={classes.menu}>
								<Link to='/profile' style={{ color: 'inherit', textDecoration: 'inherit' }}>
									<MenuItem onClick={handleClose}>Profile</MenuItem>
								</Link>
								<MenuItem onClick={handleLogout}>Logout</MenuItem>
							</Menu>
						</>
					) : (
						<Link to = '/login' style = {{ color: 'inherit', textDecoration: 'inherit' }}>
							<Button color="inherit">
								Login
								<AccountCircle className={classes.menuButton} />
							</Button>
						</Link>
					)}
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header
