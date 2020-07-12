import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Label({ title, variant }){
	return (
		<React.Fragment>
			<div className={variant}>
				<span>{title}</span>
			</div>
		</React.Fragment>
	);
}
Label.propTypes = {
	title   : PropTypes.string,
	variant : PropTypes.string,
};
export default Label;
