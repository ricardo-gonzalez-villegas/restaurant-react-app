import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import tacos from './img/tacos.jpg';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url(${tacos})`,
		backgroundColor: 'black',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '100vh',
		width: '100vw',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		color: 'white',
	},
	title: {
		letterSpacing: '3px',
		cursor: 'default',
		fontWeight: '300',
	},
	subTitle: {
		fontWeight: 200,
	},
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography
				variant='h1'
				className={classes.title}
				style={{ textDecoration: 'underline' }}
			>
				LOS PRIMOS
			</Typography>
			<Typography className={classes.subTitle} variant='h2'>
				Mexican Kitchen
			</Typography>
		</div>
	);
}
