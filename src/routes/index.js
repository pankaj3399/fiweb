import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from '../containers/HomePage';
import HowItWorks from '../containers/HowItWorks';
import FAQ from '../containers/FAQS';
import AboutUs from '../containers/AboutUs';

const history = createBrowserHistory();

export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/how">
						<HowItWorks />
					</Route>
					<Route exact path="/faq">
						<FAQ />
					</Route>
					<Route exact path="/about">
						<AboutUs />
					</Route>
				</Switch>
			</Router>
		);
	}
}
