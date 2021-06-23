import React, { Fragment } from 'react';
import Header from '../../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../../images/Home.jpg';
import { Divider, Typography } from '@material-ui/core';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme) => ({
	imageDiv: {
		backgroundImage: `url(${Home})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '90vh',
		flexGrow: 1,
		display: 'flex',
		//alignItems: 'center'
		justifyContent: 'center'
		//justifyContent: 'flex-end'
	},
	displayFlex: {
		display: 'flex',
		paddingTop: '16px',
		paddingBottom: '16px'
	},
	fontStyle: {
		color: 'white',
		fontSize: '44px',
		paddingLeft: '500px'
	},
	spanF: {
		paddingBottom: '8px',
		borderBottomStyle: 'solid'
	},
	divider: {
		width: '60%',
		height: '3px',
		marginLeft: 'auto',
		marginRight: 'auto'
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
						If you are a <br /> Service Provider,<br /> Businesses expect <br /> GST-compliant invoices.<br />{' '}
						<span className={classes.spanF}>Free Invoicing. For Life.</span>
					</Typography>
				</div>
			</div>
			<Divider className={classes.divider} />
			<div>hello</div>
			{/* <Footer /> */}
		</Fragment>
	);
}

export default HomePage;
