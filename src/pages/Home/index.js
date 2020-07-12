import React from 'react';
//Assets
import BlobHuman from '../../assets/Human.svg';
// Components
import Header from '../../components/Header';
import Modal from '../../components/Modal/ModalRoot';
import Button from '../../components/Button';
import Navbar from '../../components/NavigationBar';
import LayoutProvider from '../../components/LayoutProvider';
// Utils & Services
import { useDispatch } from 'react-redux';
import {
	ModalAction,
	ModalName,
	closeResetPasswordModal,
} from '../../util/helpers/modal-helper';
// Styles
import './style.scss';

function Home(){
	const dispatch = useDispatch();
	return (
		<React.Fragment>
			<Header title='Andrei Melo | Home' description='n/a' />
			<Navbar />
			<LayoutProvider>
				<div className='container__row'>
					<div className='container__column'>
						<div className='container__column-inner'>
							<div className='container__title-ct1'>Hey There !</div>
							<div className='container__title-ct2'>I’m Andrei Melo</div>
							<div className='container__title-ct3'>
								A Front End Developer
							</div>
							<Button
								title='Contact Me'
								variant={'button__state-contact'}
								action={() =>
									dispatch({
										type       : ModalAction.SHOW_MODAL,
										modalType  : ModalName.CONTACT_ME_MODAL,
										modalProps : {
											eventCloseModal : () =>
												closeResetPasswordModal(dispatch),
										},
									})}
							/>
						</div>
					</div>
					<div className='container__column'>
						<img src={BlobHuman} id='human-flat-ct' alt='human' />
					</div>
				</div>
			</LayoutProvider>
			<Modal />
		</React.Fragment>
	);
}

export default Home;
