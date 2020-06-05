import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Starters from './Starters';
import Dishes from './Dishes';
import Desserts from './Desserts';
import Drinks from './Drinks';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		margin: '0 auto',
		flexDirection: 'column',
		height: '100vh',
		width: '80%',
	},
	arrow: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = event => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor'
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}

export default function Menu(props) {
	const classes = useStyles();
	return (
		<div className={classes.root} id='back-to-top-anchor'>
			<Starters />
			<Dishes />
			<Desserts />
			<Drinks />
			<ScrollTop {...props}>
				<Fab
					className={classes.arrow}
					color='default'
					size='small'
					aria-label='scroll back to top'
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</div>
	);
}
