import React from 'react';
import Helmet from 'react-helmet';

const Header = ({ title, description }) => {
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet='utf-8' />
				<title>{title}</title>
				<meta name='description' content={description} />
			</Helmet>
		</React.Fragment>
	);
};
export default Header;
