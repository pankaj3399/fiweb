import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	button: {
		color: 'white'
	},
	header: {
		backgroundColor: 'rgb(6 150 231 / 87%)',
		alignItems: 'flex-end'
	}
}));

function Header(props) {
	const classes = useStyles();
	const history = useHistory();
	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.header}>
				<Toolbar>
					<Button className={classes.button} onClick={() => history.push('/')}>
						{' '}
						Home{' '}
					</Button>
					<Button className={classes.button} onClick={() => history.push('/how')}>
						{' '}
						How it Works{' '}
					</Button>
					<Button className={classes.button} onClick={() => history.push('/faq')}>
						{' '}
						FAQ's{' '}
					</Button>
					<Button className={classes.button} onClick={() => history.push('/about')}>
						{' '}
						About Us{' '}
					</Button>
					<Button className={classes.button}> Sign Up </Button>
					<Button className={classes.button}> Sign In </Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
