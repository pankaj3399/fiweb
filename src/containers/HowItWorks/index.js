import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Box from '@material-ui/core/Box';
import Unlimited from '../../images/Unlimited.jpg';
import Security from '../../images/Security.jpeg';
import Customisable from '../../images/Customisable.jpg';
import FirstInvoice from '../../images/FirstInvoice.jpg';
// import Footer from '../../components/Footer';
import Compliant from '../../components/Compliant';
import Invoices from '../../components/UnlimitedInvoices';
import BankGradeSecurity from '../../components/BankGradeSecurity';
import CreateInvoice from '../../components/CreateInvoice';

function HowItWorks() {
	return (
		<Fragment>
			<Header />
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
