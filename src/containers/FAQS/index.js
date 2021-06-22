import React from 'react';
import FAQAccordion from '../../components/FAQAccordion';
import Header from '../../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme) => ({
	text: {
		marginBottom: '16px',
		marginTop: '16px',
		fontWeight: 'bold',
		fontSize: '24px'
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));

function FAQ() {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<div className={classes.displayFlex}>
				<Typography className={classes.text}> Frequently Asked Questions </Typography>
				<FAQAccordion
					question={`Is FreeInvoicing right for my business?`}
					answer={
						<p>
							FreeInvoicing can be used by anyone providing services. It can be used by freelancers,
							lawyers and other professionals too. It can also be used to create export invoices if you
							have customers outside India.<br />
							FreeInvoicing currently does not cater to<br />
							1. Businesses with inventory, and <br />
							2. Large suppliers who are governed by e-invoicing norms.<br />
							We’ve created 2 min videos explaining various use cases. Head over to our Resources Page or
							<a href="https://www.youtube.com/channel/UCiCiLXvhHwu5hDLwfneJJgg"> Youtube Channel</a> to
							know more.
						</p>
					}
				/>
				<FAQAccordion
					question={`I am not registered under GST. Can I still use FreeInvoicing?`}
					answer={
						<p>
							Absolutely! FreeInvoicing allows you to select if you are GST registered or not. If you are
							not GST registered,
							<br />
							1. Your invoices will be titled "Bill of Supply" and not Tax Invoice,<br />
							2. There will be no taxes on the invoice; it will simply mention the total amount due,{' '}
							<br />
							3. Your invoices will be serially numbered, and also digitally signed .<br />
							Further, when you qualify for registration, we can help you get your GST Number, for free.
						</p>
					}
				/>
				<FAQAccordion
					question={`Is my data safe with you?`}
					answer={
						<p>
							For sure, Yes! Your data is fully encrypted and we cannot view it. The only person who can
							access your data is you.
							<br />
							We are not in the business of monetising your data.
						</p>
					}
				/>
				<FAQAccordion
					question={`I want to file my tax returns. My invoices are created using FreeInvoicing.`}
					answer={
						<p>
							You can download all the invoices created on FreeInvoicing on a spreadsheet and forward them
							to your accountant to help you.
							<br />
							Or we can too. Sign-up to Complii, Compliance-as-a-Service. Visit{' '}
							<a href="https://www.complii.in">www.complii.in</a>
						</p>
					}
				/>
				<FAQAccordion
					question={`Does your brand appear on my invoice?`}
					answer={
						<p>
							We occupy a tiny space at the bottom of the invoice. The text reads "A free service courtsey
							Complii | Visit <a href="https://www.complii.in">www.complii.in</a>"
							<br />
							There is no other branding elsewhere.
						</p>
					}
				/>
				<Typography className={classes.text}> Watch a 90 second overview </Typography>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/IkwngmQIYj0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					style={{ marginBottom: '16px' }}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default FAQ;
