import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
	root: {
		zIndex: 2,
		position: 'absolute',
		width: '100%',
	},
	navButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		letterSpacing: '3px',
	},
}));

export default function Navbar() {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Toolbar>
					<Typography variant='h4' className={classes.title}>
						LOS PRIMOS
					</Typography>
					<Link to='/'>
						<IconButton
							edge='start'
							className={classes.navButton}
							color='action'
							aria-label='home'
						>
							<HomeRoundedIcon fontSize='large' />
						</IconButton>
					</Link>
					<Link to='/menu'>
						<IconButton
							edge='start'
							className={classes.navButton}
							color='action'
							aria-label='menu'
						>
							<RestaurantMenuIcon fontSize='large' />
						</IconButton>
					</Link>
					<Link to='/about'>
						<IconButton
							edge='start'
							className={classes.navButton}
							color='action'
							aria-label='about'
						>
							<InfoIcon fontSize='large' />
						</IconButton>
					</Link>
					<IconButton
						edge='start'
						className={classes.navButton}
						color='action'
						aria-label='contact'
						onClick={handleClick}
					>
						<PhoneIcon fontSize='large' />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				open={open}
				message={
					<div id='message-id'>
						<h3>Hours</h3>
						Monday - Friday: 08:00 - 23:00
						<br />
						Saturday: 10:00 - 24:00
						<br />
						Sunday: 10:00 - 22:00
						<br />
						<h3>Address</h3>
						123 Market Street
						<br />
						Indianapolis, IN 11111
						<br />
						123 457 6890
					</div>
				}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				onClose={handleClose}
				action={[
					<IconButton
						style={{ position: 'absolute', top: 0, right: 2 }}
						onClick={handleClose}
						key='close'
						aria-label='close'
					>
						<CloseIcon />
					</IconButton>,
				]}
			/>
		</div>
	);
}
