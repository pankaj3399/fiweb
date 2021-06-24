import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SmartPhone from '../../images/smartphone.webp';
import Devices from '../../images/Dictate.png';
import Seconds from '../../images/30.webp';
import Whatsapp from '../../images/whatsapp.webp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { List, ListItem, ListItemIcon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
	imageBox: {
		flex: 0.5
	},
	displayFlex: {
		display: 'flex',
		marginBottom: '40px',
		marginTop: '40px'
	},
	fontStyle: {
		color: 'white',
		fontSize: '30px',
		marginLeft: '50px'
	},
	firstBox: {
		flex: 0.5,
		display: 'flex',
		flexDirection: 'column',
		//paddingRight: '40px',
		//justifyContent: 'center',
		alignItems: 'flex-end'
	},
	whatsappdiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	createText: {
		color: 'rgb(43,104,93)',
		fontSize: '23px'
		//fontWeight: 'bold'
	},
	secondText: {
		fontSize: '24px'
	},
	fixedWidth: {
		width: '450px'
	},
	icon: {
		color: 'rgb(43,104,93)',
		fontSize: '12px'
	}
}));

function InvoicesOnGo() {
	const classes = useStyles();
	return (
		<Box className={classes.displayFlex}>
			<Box className={classes.firstBox}>
				<Box className={classes.fixedWidth}>
					<List component="ul">
						<ListItem>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon className={classes.icon} />
							</ListItemIcon>
							<Typography className={classes.createText}> Support all devices </Typography>
							{/* <img src={Devices} height="250px" alt="Devices Here" /> */}
						</ListItem>
						<ListItem>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon className={classes.icon} />
							</ListItemIcon>
							<Typography className={classes.createText}> Support all document types </Typography>
							{/* <FormControlLabel control={<GreenCheckbox checked={true} />} label="Tax Invoice" />
					<FormControlLabel control={<GreenCheckbox checked={true} />} label="Export Invoice" />
					<FormControlLabel control={<GreenCheckbox checked={true} />} label="Bill of Supply" /> */}
						</ListItem>
						<ListItem>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon className={classes.icon} />
							</ListItemIcon>
							<Typography className={classes.createText}> Create & Send in 30 seconds </Typography>
						</ListItem>
						{/* <Box>
						<img src={Whatsapp} alt="Whatsapp Here" style={{ marginRight: '40px' }} />
						<img src={Seconds} alt="Seconds Here" />
					</Box> */}
					</List>
				</Box>
			</Box>
			<Box className={classes.imageBox}>
				<img
					src={SmartPhone}
					height="606px"
					width="760px"
					object-fit="cover"
					object-position="50% 50%;"
					alt="Smartphone Here"
				/>
			</Box>
		</Box>
	);
}

export default InvoicesOnGo;
