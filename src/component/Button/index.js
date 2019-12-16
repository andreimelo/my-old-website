import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.scss';
const Button = ({ name, onClickEvent }) => {
	let history = useHistory();
	const getSpecificButton = () => {
		return {
			contact_me : (
				<button
					id='button__state-contact'
					onClick={() =>
						onClickEvent(
							'WEBSITE UNDER CONSTRUCTION! \nHey! you can email me  : andreiagno.melo@gmail.com',
						)}
				>
					Contact Me
				</button>
			),
			gohome     : (
				<button id='button__state-gohome' onClick={() => history.push('/')}>
					Go to Homepage
				</button>
			),
		};
	};
	return <React.Fragment>{getSpecificButton()[name]}</React.Fragment>;
};

export default Button;
