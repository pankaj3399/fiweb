import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
		fontWeight: 'bold'
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
		width: '520px'
	}
}));

function ImageText(props) {
	const classes = useStyles(props);
	return (
		<Box className={classes.displayFlex}>
			<Box className={classes.customisableImageBox} />
			<Box className={classes.firstCBox}>
				<Box className={classes.fixedWidth}>
					<Typography className={classes.fontCStyle}>
						100% COMPLIANT, <br />& CUSTOMISABLE
					</Typography>
					<List component="ul">
						<ListItem>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'black', fontSize: '12px' }} />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>Fully compliant with GST</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'black', fontSize: '12px' }} />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>
								API driven Export Invoices in $, £ and €
							</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'black', fontSize: '12px' }} />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>
								Digitally sign invoices with timestamp
							</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon style={{ minWidth: '30px' }}>
								<FiberManualRecordIcon style={{ color: 'black', fontSize: '12px' }} />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>
								Add your logo. Customize fonts, styles
							</Typography>
						</ListItem>
						<ListItem>
							<ListItemIcon style={{ minWidth: '30px', opacity: 0 }}>
								<FiberManualRecordIcon style={{ color: 'black', fontSize: '12px' }} />
							</ListItemIcon>
							<Typography className={classes.fontSmallStyle}>and colours.</Typography>
						</ListItem>
					</List>
				</Box>
			</Box>
		</Box>
	);
}

export default ImageText;
