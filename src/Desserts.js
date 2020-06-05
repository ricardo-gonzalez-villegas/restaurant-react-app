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
	const desserts = [
		{
			name: 'Flan',
			description: 'Aliquam porttitor luctus mi.',
			price: '$5',
		},
		{
			name: 'Rice Pudding',
			description: 'Aliquam porttitor luctus mi.',
			price: '$5',
		},
		{
			name: 'Pastel de tres leches',
			description: 'Aliquam porttitor luctus mi.',
			price: '$4',
		},
		{
			name: 'Churro',
			description: 'Aliquam porttitor luctus mi.',
			price: '$3',
		},
	];

	const classes = useStyles();

	return (
		<div>
			<div className={classes.section}>
				<Typography variant='h3'>Desserts</Typography>
			</div>
			<div className={classes.sectionSub}>
				<Typography variant='h6'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Typography>
			</div>
			<div className={classes.itemContainer}>
				{desserts.map(dessert => (
					<div className={classes.item}>
						<Typography className={classes.itemName}>
							{dessert.name}
						</Typography>
						<Typography
							className={classes.itemDescription}
							color='textSecondary'
						>
							{dessert.description}
						</Typography>
						<Typography className={classes.itemPrice}>
							{dessert.price}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
}
