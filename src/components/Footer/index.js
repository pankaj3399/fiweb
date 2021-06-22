import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	button: {
		color: 'white'
	},
	header: {
		backgroundColor: 'black',
		alignItems: 'center'
	}
}));

function Footer(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.header}>
				<Typography className={classes.button}>Powered by Complii</Typography>
				<Typography
					className={classes.button}
					style={{ cursor: 'pointer' }}
					onClick={() => {
						window.open('https://complii.in');
					}}
				>
					Visit www.complii.in
				</Typography>
			</AppBar>
		</div>
	);
}

export default Footer;
