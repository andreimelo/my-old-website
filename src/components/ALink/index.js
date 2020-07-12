import React from 'react';
import Proptypes from 'prop-types';

function ALink({ children, link, target, rel }){
	return (
		<React.Fragment>
			<a href={link} target={target} rel={rel}>
				{children}
			</a>
		</React.Fragment>
	);
}

ALink.propTypes = {
	children : Proptypes.any,
	link     : Proptypes.string,
	target   : Proptypes.string,
	rel      : Proptypes.string,
};
export default ALink;
