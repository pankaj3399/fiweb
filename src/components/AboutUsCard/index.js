import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: '250px',
		alignItems: 'center',
		padding: '8px'
	},
	details: {
		display: 'flex',
		flexDirection: 'column'
		//flex: 0.7
	},
	content: {
		flex: '1 0 auto'
	},
	cover: {
		//width: '500px'
		//height: '200px'
	},
	heading: {
		fontWeight: 'bold',
		fontSize: '20px'
	},
	description: {
		fontSize: '12px'
	}
}));

export default function AboutUsCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<img src={props.src} alt="Here" height="200px" width="200px" />
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography className={classes.heading}>{props.heading}</Typography>
					<Typography className={classes.description}>{props.description}</Typography>
				</CardContent>
			</div>
		</Card>
	);
}
