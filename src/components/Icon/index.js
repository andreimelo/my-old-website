import React from 'react';
import './style.scss';
import Proptypes from 'prop-types';
import TwitterIcon from '../../assets/twitter_io.svg';
import GithubIcon from '../../assets/github_io.svg';
import LinkedInIcon from '../../assets/linkedin_io.svg';
import CloseButton from '../../assets/close_button.svg';

function Icon({ source, variant, alt }){
	function getSpecificIcon(){
		return {
			Twitter     : TwitterIcon,
			Github      : GithubIcon,
			LinkedIn    : LinkedInIcon,
			CloseButton : CloseButton,
		};
	}
	return (
		<React.Fragment>
			<img src={getSpecificIcon()[source]} className={variant} alt={alt} />
		</React.Fragment>
	);
}

Icon.propTypes = {
	source  : Proptypes.string,
	variant : Proptypes.string,
	alt     : Proptypes.string,
};
export default Icon;
