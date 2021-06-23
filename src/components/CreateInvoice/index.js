import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	customisableImageBox: {
		// marginTop: '40px',
		backgroundImage: (props) => `url(${props.src})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '60vh',
		flex: 0.5,
		display: 'flex',
		justifyContent: 'center'
	},
	displayFlex: {
		display: 'flex'
	},
	fontCStyle: {
		color: 'black',
		fontSize: '22px',
		fontWeight: 'bold',
		paddingBottom: '16px'
	},
	fontSmallStyle: {
		color: 'black',
		fontSize: '25px',
		paddingBottom: '16px'
	},
	firstCBox: {
		paddingTop: '30px',
		flex: 0.5,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(250, 250, 250);'
	},
	fixedWidth: {
		width: '520px'
	},
	buttonSignUp: {
		color: 'white',
		backgroundColor: '#4cc8ad',
		width: '120px'
	}
}));

function ImageText(props) {
	const classes = useStyles(props);
	return (
		<Box className={classes.displayFlex}>
			<Box className={classes.customisableImageBox} />
			<Box className={classes.firstCBox}>
				<Box className={classes.fixedWidth}>
					<Typography className={classes.fontSmallStyle}>
						If you don't have a GST Number,
						<br />We can help you register for Free.
					</Typography>
					<Typography className={classes.fontCStyle}>CREATE YOUR FIRST INVOICE TODAY !</Typography>
					<Button className={classes.buttonSignUp}> Sign-Up</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default ImageText;
