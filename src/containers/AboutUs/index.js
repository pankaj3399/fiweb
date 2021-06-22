import React from 'react';
import Header from '../../components/Header';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AboutUsCard from '../../components/AboutUsCard';
import Pavan from '../../images/Pavan.png';
import Hart from '../../images/Hart.jpg';
import Complii from '../../images/Complii.jpg';
import Footer from '../../components/Footer';
const useStyles = makeStyles((theme) => ({
	text: {
		padding: '24px'
	},
	gridStyle: {
		padding: '24px'
	}
}));

function AboutUs() {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<Typography className={classes.text}>
				We are a 110 person firm of Chartered Accountants in Bangalore{' '}
				<a href="https://www.bclindia.in/">(www.bclindia.in)</a> and have teamed up with Hartej Singh, a US
				Citizen, MIT alum and software entrepreneur{' '}
				<a href="https://www.linkedin.com/in/hartsingh/">(LinkedIn)</a> to create this offering as part of a
				unique ecosystem.<br /> Freelancers working in global gig marketplaces receive foreign exchange and are
				required to submit Export Invoices to their banker to ensure compliance with FEMA (Foreign Exchange
				Management Act) & GST (Goods & Services Tax Laws). They can also take advantage of zero tax GST to get a
				REFUND of GST spent on laptops, cellphones, Internet, flights, hotels used for business. They would also
				need books of accounts and income tax filing to be done each year. For this, we created{' '}
				<a href="https://www.complii.in">Complii</a> to provide Compliance-as-a-Service, at the price of a cup
				of coffee! <br /> We also created FreeInvoicing to enable EVERY Service provider to create Invoices that
				are automatically & fully compliant with Indian Laws. For Free. <br />
				When we used one of the biggest gig marketplaces to get some work done, we realized that though they
				stated they were charging 20% from the seller, they ALSO charged us 10% Service fee! When translating
				currency, they added another 6%. And when the funds were finally transmitted, another 10% was deducted.
				Our clients complained that this was highway robbery and they could not make money, condemned forever to
				poverty. So we decided to create a platform that would ensure 95% of the money flowed through to the
				vendor with same day deposit. We also decided to focus ONLY on US Customers since our co founder is a US
				Citizen. That was the genesis of <a href="http://www.indianfreelancers.us/">IndianFreelancers.us</a>
			</Typography>
			<Grid container spacing={2} className={classes.gridStyle}>
				<Grid item xs={12} md={4}>
					<AboutUsCard
						heading={`Pavan Sharma, Co-Founder & CEO`}
						description={
							<p>
								Pavan - Pavan cleared his CA exam in his first attempt, AIR 3. He heads BCL, one of
								Bangalore’s fastest-growing full service CA/CS firms serving elite clients worldwide. 8
								partners, 110 employees, 3 locations.<br />
								BCL was acknowledged by Intuit as one of the 15 top ProAdvisors in the world.
							</p>
						}
						src={Pavan}
					/>
				</Grid>

				<Grid item xs={12} md={4}>
					<AboutUsCard
						heading={`Hartej Singh, Co-Founder & CTO`}
						description={
							<p>
								Hart - Hartej Singh is an alum of IIM-A and MIT. He cco-founded Enforsys which is now
								the largest ERP serving 700 Police Departments. His QuickBooks in your iPhone product
								became a top 5 Business App on App Store. His craft beer manufacturing ERP-in-the-cloud
								became market leader and was acquired by a Nasdaq firm.<br />
								He was also adjunct professor of Entrepreneurship and Cloud Technologies at 4 major US
								Universities.
							</p>
						}
						src={Hart}
					/>
				</Grid>

				<Grid item xs={12} md={4}>
					<AboutUsCard
						heading={`Complii Systems Pvt. Ltd.`}
						description={
							<p>
								Complii address - 4th and 5th Floor. Vishnu Towers No. 20, 9th Cross Rd, ITI Layout, 1st
								Phase, J. P. Nagar, Bengaluru Karnataka 560078 <br />
								info@compliin.in | www.complii.in{' '}
							</p>
						}
						src={Complii}
					/>
				</Grid>
			</Grid>
			<Footer />
		</div>
	);
}

export default AboutUs;
