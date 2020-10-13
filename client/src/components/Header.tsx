import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCard from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
		display: 'flex',
		justifyContent: 'space-between'
    },
    menuButton: {
      marginRight: theme.spacing(1),
    }
  })
);

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar className={classes.header}>
				<Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
					<Typography variant="h6">
						Vinyl Shop
					</Typography>
				</Link>
				<div>
					<Link to='/cart' style={{ color: 'inherit', textDecoration: 'inherit'}}>
						<Button color="inherit" className={classes.menuButton}>
							<ShoppingCard className={classes.menuButton} />
							Cart
						</Button>
					</Link>
					<Link to='/login' style={{ color: 'inherit', textDecoration: 'inherit'}}>
						<Button color="inherit">
							<AccountCircle className={classes.menuButton} />
							Login
						</Button>
					</Link>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header
