import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import restaurant from './img/restaurant.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url(${restaurant})`,
		height: '100vh',
		width: '100vw',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		width: '500px',
		height: '300px',
	},
	title: {
		fontSize: 40,
		marginBottom: '20px',
	},
	about: {
		fontSize: '17px',
		lineHeight: '30px',
		wordSpacing: '5px',
	},
}));

export default function About() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<CardContent>
					<Typography
						className={classes.title}
						color='textPrimary'
						align='center'
					>
						About Us
					</Typography>
					<Typography
						className={classes.about}
						variant='body2'
						component='p'
						color='textSecondary'
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc at urna sed nulla suscipit commodo vel sed est.
						Vestibulum pharetra tortor a arcu blandit, eget
						fringilla arcu tempus. Aliquam porttitor luctus mi, vel
						rutrum ex semper at. Consectetur adipiscing elit nunc at
						urna.
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
