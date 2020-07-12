import React from 'react';
import '../Home/style.scss';
import Header from './../../components/Header';
import Button from './../../components/Button';
import { useHistory } from 'react-router-dom';

function NotFound(){
	const history = useHistory();
	return (
		<React.Fragment>
			<Header title='Andrei Melo | 404 ' />
			<main className='container'>
				<section className='container__image'>
					<section className='container__image-clock' />
					<section className='container__content'>
						<div className='container__content-title'>
							404: Page Not Found
						</div>
						<div className='container__content-subtitle'>
							Stop wasting your time!
						</div>
						<Button
							variant='button__state-gohome'
							action={() => history.push('/')}
							title='Go to Homepage'
						/>
					</section>
				</section>
			</main>
		</React.Fragment>
	);
}

export default NotFound;
