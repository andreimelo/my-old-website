import React from 'react';
import { Head } from 'react-static';
import PropTypes from 'prop-types';
// assets - My Favicon
import TabIcon from '../../assets/profile_id.ico';

function Header({ title, description }){
	return (
		<React.Fragment>
			<Head>
				<meta charSet='utf-8' />
				<title>{title}</title>
				<link rel='icon' type='image/ico' href={TabIcon} />
				<meta name='description' content={description} />
			</Head>
		</React.Fragment>
	);
}
Header.propTypes = {
	title       : PropTypes.string,
	description : PropTypes.string,
};
export default Header;
