import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function LayoutProvider({ children, variant }){
	return (
		<React.Fragment>
			<main id='container'>
				<div id={variant}>{children}</div>
			</main>
		</React.Fragment>
	);
}
LayoutProvider.propTypes = {
	children : PropTypes.node.isRequired,
	variant  : PropTypes.string,
};
export default LayoutProvider;
