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
		height: '90vh',
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
		width: '120px',
		marginLeft: '50px',
		marginTop: '16px'
	}
}));

function HowItWorks() {
	const classes = useStyles();
	return (
		<Fragment>
			<Header />
			<Box className={classes.displayFlex}>
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
			</Box>
			<Box className={classes.displayFlex}>
				<Box className={clsx(classes.unlimitedImageBox, classes.commonImageBox)}>
					<Typography className={classes.unlimitedInvoices}>Create Unlimited Invoices</Typography>
					<List component="ul">
						<ListItem style={{ paddingLeft: '50px' }}>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'white' }} />
							</ListItemIcon>
							<Typography className={classes.fontListStyle}>Create Invoices within 30 seconds</Typography>
						</ListItem>
						<ListItem style={{ paddingLeft: '50px' }}>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'white' }} />
							</ListItemIcon>
							<Typography className={classes.fontListStyle}>Connect Unlimited Customers</Typography>
						</ListItem>
						<ListItem style={{ paddingLeft: '50px' }}>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'white' }} />
							</ListItemIcon>
							<Typography className={classes.fontListStyle}>Dictate description with your mic</Typography>
						</ListItem>
						<ListItem style={{ paddingLeft: '50px' }}>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'white' }} />
							</ListItemIcon>
							<Typography className={classes.fontListStyle}>
								Download & share via email or WhatsApp
							</Typography>
						</ListItem>
					</List>
				</Box>
			</Box>
			<Box className={classes.displayFlex}>
				<Box className={classes.firstCBox}>
					<Typography className={classes.fontCStyle} style={{ fontWeight: 'bold' }}>
						100% Compliant and Customisable
					</Typography>
					<List component="ul">
						<ListItem style={{ paddingLeft: '30px' }}>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'black' }} fontSize="small" />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>Fully compliant with GST</Typography>
						</ListItem>
						<ListItem style={{ paddingLeft: '30px' }}>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'black' }} fontSize="small" />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>
								API driven Export Invoices in USD, GBP & EUR
							</Typography>
						</ListItem>
						<ListItem style={{ paddingLeft: '30px' }}>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'black' }} fontSize="small" />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>
								Digitally sign invoices with timestamp
							</Typography>
						</ListItem>
						<ListItem style={{ paddingLeft: '30px' }}>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'black' }} fontSize="small" />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>
								Add your logo. Customize fonts, styles and colours.
							</Typography>
						</ListItem>
					</List>
				</Box>
				<Box className={classes.customisableImageBox} />
			</Box>
			<Box className={classes.displayFlex}>
				<Box className={clsx(classes.securityImageBox, classes.commonImageBox)}>
					{/* style changes */}
					<Typography className={classes.unlimitedInvoices}>Bank Grade Security</Typography>
					<Typography className={classes.unlimitedInvoices}>& Encryption</Typography>
					<Typography className={classes.fontStyle}>Your data will always be</Typography>
					<Typography className={classes.fontStyle}>safe, secure and</Typography>
					<Typography className={classes.fontStyle}>invisible</Typography>
				</Box>
			</Box>
			<Box className={classes.displayFlex}>
				<Box className={clsx(classes.firstInvoiceBox, classes.commonImageBox)}>
					<Typography className={classes.fontStyle}>
						If you dont't have GST Number,<br />We can help you register.<br />For free{' '}
					</Typography>
					<Typography className={classes.unlimitedInvoices}>
						Create Your First Invoice<br /> TODAY!
					</Typography>
					<Button className={classes.buttonSignUp}> Sign-Up</Button>
				</Box>
			</Box>
			<Footer />
		</Fragment>
	);
}

export default HowItWorks;
