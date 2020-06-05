import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	section: {
		paddingTop: '50px',
		paddingBottom: '10px',
		margin: '0 auto',
		width: '100%',
		fontSize: '40px',
		borderBottom: '3px solid black',
		textAlign: 'center',
	},
	sectionSub: {
		fontSize: '1rem',
		textAlign: 'left',
	},
	itemContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		top: '30px',
		paddingBottom: '50px',
	},
	item: {
		paddingTop: '50px',
		marginRight: '20px',
		width: '23%',
		height: '200px',
		borderBottom: '5px dotted black',
		borderWidth: 'thick',
		float: 'left',
	},
	itemName: {
		fontSize: '20px',
		lineHeight: '60px',
		fontWeight: 'bold',
	},
	itemDescription: {
		fontSize: '18px',
		lineHeight: '60px',
	},
	itemPrice: {
		lineHeight: '60px',
		fontWeight: 'bold',
	},
}));

export default function Dishes() {
	const drinks = [
		{
			name: 'Corona',
			description: 'Aliquam porttitor luctus mi.',
			price: '$3',
		},
		{
			name: 'Tecate',
			description: 'Aliquam porttitor luctus mi.',
			price: '$3',
		},
		{
			name: 'Modelo',
			description: 'Aliquam porttitor luctus mi.',
			price: '$3',
		},
		{
			name: 'Margarita',
			description: 'Aliquam porttitor luctus mi',
			price: '$6',
		},
		{
			name: 'Horchata',
			description: 'Aliquam porttitor luctus mi.',
			price: '$3',
		},
		{
			name: 'Tamarind Water',
			description: 'Aliquam porttitor luctus mi.',
			price: '$2',
		},
		{
			name: 'Hibiscus Water',
			description: 'Aliquam porttitor luctus mi.',
			price: '$2',
		},
		{
			name: 'Lime Water',
			description: 'Aliquam porttitor luctus mi',
			price: '$3',
		},
	];

	const classes = useStyles();

	return (
		<div>
			<div className={classes.section}>
				<Typography variant='h3'>Drinks</Typography>
			</div>
			<div className={classes.sectionSub}>
				<Typography variant='h6'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Typography>
			</div>
			<div className={classes.itemContainer}>
				{drinks.map(drink => (
					<div className={classes.item}>
						<Typography className={classes.itemName}>
							{drink.name}
						</Typography>
						<Typography
							className={classes.itemDescription}
							color='textSecondary'
						>
							{drink.description}
						</Typography>
						<Typography className={classes.itemPrice}>
							{drink.price}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
}
