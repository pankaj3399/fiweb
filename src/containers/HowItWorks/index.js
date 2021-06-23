import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Header from '../../components/Header';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SmartPhone from '../../images/smartphone.png';
import Devices from '../../images/devices.png';
import Seconds from '../../images/30.png';
import Whatsapp from '../../images/whatsapp.png';
import Unlimited from '../../images/Unlimited.jpg';
import Security from '../../images/Security.jpeg';
import Customisable from '../../images/Customisable.jpg';
import FirstInvoice from '../../images/FirstInvoice.jpg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import { List, ListItem, ListItemIcon, Button } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Footer from '../../components/Footer';
import Compliant from '../../components/Compliant';
import Invoices from '../../components/UnlimitedInvoices';
import BankGradeSecurity from '../../components/BankGradeSecurity';
import CreateInvoice from '../../components/CreateInvoice';

const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600]
		}
	},
	checked: {}
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
	commonImageBox: {
		marginTop: '40px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '90vh',
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	imageBox: {
		marginTop: '40px',
		backgroundImage: `url(${SmartPhone})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '90vh',
		flexGrow: 0.5,
		display: 'flex',
		justifyContent: 'center'
	},
	customisableImageBox: {
		marginTop: '40px',
		backgroundImage: `url(${Customisable})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '60vh',
		flex: 0.5,
		display: 'flex',
		justifyContent: 'center'
	},
	unlimitedImageBox: {
		backgroundImage: `url(${Unlimited})`
	},
	securityImageBox: {
		backgroundImage: `url(${Security})`
	},
	firstInvoiceBox: {
		backgroundImage: `url(${FirstInvoice})`
	},
	displayFlex: {
		display: 'flex'
	},
	fontStyle: {
		color: 'white',
		fontSize: '30px',
		// marginBottom: '48px'
		marginLeft: '50px'
	},
	fontListStyle: {
		color: 'white',
		fontSize: '30px'
	},
	fontCStyle: {
		color: 'black',
		fontSize: '30px',
		marginLeft: '30px'
	},
	fontSmallStyle: {
		color: 'black',
		fontSize: '24px'
	},
	firstBox: {
		flexGrow: 0.5,
		display: 'flex',
		flexDirection: 'column',
		// paddingLeft: '40px',
		paddingRight: '40px',
		justifyContent: 'center',
		//alignItems: 'flex-end'
		alignItems: 'center'
	},
	firstCBox: {
		marginTop: '40px',
		flex: 0.5,
		display: 'flex',
		flexDirection: 'column',
		paddingRight: '40px'
		//justifyContent: 'center'
		//alignItems: 'flex-end'
	},
	whatsappdiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	createText: {
		color: 'red',
		fontSize: '24px',
		fontWeight: 'bold'
	},
	secondText: {
		fontSize: '24px'
	},
	unlimitedInvoices: {
		color: '#4cc8ad',
		fontSize: '30px',
		marginLeft: '50px'
	},
	fixedWidth: {
		width: '450px'
	},
	buttonSignUp: {
		color: 'white',
		backgroundColor: '#4cc8ad',
		width: '120px'
	}
}));

function HowItWorks() {
	const classes = useStyles();
	return (
		<Fragment>
			<Header />
			{/* <Box className={classes.displayFlex}>
				<Box className={classes.firstBox}>
					<Box className={classes.fixedWidth}>
						<Typography className={classes.createText}> Support All Devices </Typography>
						<img src={Devices} height="300px" alt="Devices Here" />
					</Box>
					<Box className={classes.fixedWidth}>
						<Typography className={classes.createText}> Support All Document Types </Typography>

						<FormControlLabel control={<GreenCheckbox checked={true} />} label="Tax Invoice" />
						<FormControlLabel control={<GreenCheckbox checked={true} />} label="Export Invoice" />
						<FormControlLabel control={<GreenCheckbox checked={true} />} label="Bill of Supply" />
					</Box>
					<Box className={clsx(classes.whatsappdiv, classes.fixedWidth)}>
						<Box>
							<Typography className={classes.createText}> Create & Send </Typography>
							<Typography className={classes.secondText}> In 30 seconds </Typography>
						</Box>
						<Box>
							<img src={Whatsapp} height="50px" alt="Whatsapp Here" style={{ marginRight: '40px' }} />
							<img src={Seconds} height="50px" alt="Seconds Here" />
						</Box>
					</Box>
				</Box>
				<Box className={classes.imageBox}>
					<Typography className={classes.fontStyle}>Produce Invoices on the Go</Typography>
				</Box>
			</Box> */}
			<Box style={{ paddingTop: '20px' }}>
				<Invoices src={Unlimited} />
				<Compliant src={Customisable} />
				<BankGradeSecurity src={Security} />
				<CreateInvoice src={FirstInvoice} />
			</Box>
			{/* <Footer /> */}
		</Fragment>
	);
}

export default HowItWorks;
