import React from 'react';
import Header from '../../component/Header';
import Button from '../../component/Button';
import './style.scss';

const NotFound = () => {
	return (
		<React.Fragment>
			<Header title='Andrei Melo | 404 ' />
			<main id='container'>
				<section id='container__image'>
					<section id='container__image-clock' />
					<section id='container__content'>
						<div id='container__content-title'>404: Page Not Found</div>
						<div id='container__content-subtitle'>
							Stop wasting your time!
						</div>
						<Button name='gohome' />
					</section>
				</section>
			</main>
		</React.Fragment>
	);
};

export default NotFound;
