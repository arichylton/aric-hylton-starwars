import React from 'react';

import './componentStyles/Footer.css';

const Footer = () => {
	return (
		<div className="footerBackground">
			<h4 style={{ wordSpacing: 2, letterSpacing: 1, fontSize: '110%', marginBottom: 0 }} className="tc">
				{' '}
				Made with <i className="icon ion-md-heart" style={{ color: 'red' }} /> by Aric Hylton &copy; 2019
			</h4>
		</div>
	);
};

export default Footer;
