import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	customisableImageBox: {
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
		fontSize: '25px'
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
		width: '450px'
	}
}));

function ImageText2(props) {
	const classes = useStyles(props);
	return (
		<Box className={classes.displayFlex}>
			<Box className={classes.firstCBox}>
				<Box className={classes.fixedWidth}>
					<Typography className={classes.fontCStyle}>
						BANK GRADE <br />SECURITY ENCRYPTION
					</Typography>
					<Typography className={classes.fontSmallStyle}>
						Your data will always be safe,<br /> secure and invisible.
					</Typography>
				</Box>
			</Box>
			<Box className={classes.customisableImageBox} />
		</Box>
	);
}

export default ImageText2;
