import React from 'react';
import './style.scss';
import MyLogo from '../../assets/MyLogo.svg';
import { onAlertComingSoon } from '../../helpers/constant';

function NavigationBar(){
	return (
		<React.Fragment>
			<nav className='navbar'>
				<div className='navbar__container'>
					<div className='navbar__container-position-left'>
						<img src={MyLogo} className='navbar__logo' alt='myLogo' />
					</div>
					<div className='navbar__container-position-right'>
						<div className='navbar__title'>Home</div>
						<div
							className='navbar__title'
							onClick={() => onAlertComingSoon('Coming Soon!')}
						>
							What I do
						</div>
						<div
							className='navbar__title'
							onClick={() => onAlertComingSoon('Coming Soon!')}
						>
							My Project
						</div>
						<div
							className='navbar__title'
							onClick={() => onAlertComingSoon('Coming Soon!')}
						>
							Contact
						</div>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default NavigationBar;
