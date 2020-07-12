import React, { useRef } from 'react';
// Components
import Button from '../../Button';
import Label from '../../Label';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../../Input';
import TextArea from '../../TextArea';
// Hooks
import { useInput } from '../../../hooks/useInput';
// Helpers/Util/Services
import { inputValidation } from '../../../util/input-validation-rules';
// Styles
import '../style.scss';
import Icon from '../../Icon';

function ContactMeModal({ eventCloseModal }){
	const { input, errors, handleChange, handleSubmit } = useInput(inputValidation);
	return (
		<React.Fragment>
			<div className='modal__backdrop'>
				<div className='modal__body'>
					<div className='modal__content'>
						<div
							className='modal__content-position-right'
							onClick={eventCloseModal}
						>
							<Icon source='CloseButton' variant='' alt='closeButton' />
						</div>
						<div>
							<Label title='Name' variant='font' />
							<div>
								<Input
									value={input.name || ''}
									name='name'
									placeholder='Enter your name'
									variant='input'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</div>
						<div>
							<Label title='Email' variant='font' />
							<div>
								<Input
									value={input.email || ''}
									name='email'
									placeholder='Enter your email'
									variant='input'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</div>
						<div>
							<Label title='Message' variant='font' />
							<div>
								<TextArea
									value={input.message || ''}
									name='message'
									placeholder='Enter your message'
									variant='textarea'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</div>
						<br />
						<div className='modal__content-center'>
							<ReCAPTCHA
								sitekey='6LeWoOgUAAAAACmrGnW86gl2_Ogno0XSKQFXBocq'
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div className='modal__content-center'>
							<Button
								title='Submit'
								variant='button__state-contact-me'
								action={handleSubmit}
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ContactMeModal;
