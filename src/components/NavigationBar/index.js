import React from 'react';
import './style.scss';
import MyLogo from '../../assets/MyLogo.svg';
import Button from '../Button';
import { useDimensions } from '../../hooks/useDimensions';

function NavigationBar(){
	const { width } = useDimensions();
	console.log(width, 'WIDTH');
	return (
		<React.Fragment>
			<nav className='navbar'>
				<div className='navbar__container'>
					<div className='navbar__container-position-left'>
						<img src={MyLogo} className='navbar__logo' alt='myLogo' />
					</div>
					<div className='navbar__container-position-right'>
						<div className='navbar__title'>Home</div>
						<div className='navbar__title'>About Me</div>
						<div className='navbar__title'>My Project</div>
						{/* <div className='navbar__title'>Contact</div> */}
						{/* <Button title='Menu' variant='button__navbar' /> */}
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default NavigationBar;
