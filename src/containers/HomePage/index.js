import React, { Fragment } from 'react';
import Header from '../../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../../images/Home.jpg';
import { Typography } from '@material-ui/core';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme) => ({
	imageDiv: {
		backgroundImage: `url(${Home})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
		//justifyContent: 'flex-end'
	},
	displayFlex: {
		display: 'flex'
	},
	fontStyle: {
		color: 'white',
		fontSize: '30px',
		marginBottom: '48px'
		// marginRight: '150px'
	}
}));

function HomePage(props) {
	const classes = useStyles();
	return (
		<Fragment>
			<Header />
			<div className={classes.displayFlex}>
				<div className={classes.imageDiv}>
					<Typography className={classes.fontStyle}>
						If you are a Service Provider,<br /> Businesses expect GST-compliant invoices.<br /> Free
						invoicing for life.
					</Typography>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default HomePage;
