import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Button = ({ title, variant, action }) => {
	return (
		<React.Fragment>
			<button id={variant} onClick={action}>
				{title}
			</button>
		</React.Fragment>
	);
};
Button.propTypes = {
	title   : PropTypes.string,
	action  : PropTypes.any,
	variant : PropTypes.string,
};
export default Button;
