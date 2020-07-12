import React from 'react';
import Icon from '../Icon';
import ALink from '../ALink';
import './style.scss';
import { COPYRIGHT_CONTENT } from '../../util/helpers/footer-constant';

const Footer = () => {
	return (
		<React.Fragment>
			<footer>
				<div className='container'>
					<div className='container__content'>
						<div className='container__outside_position-left'>
							{COPYRIGHT_CONTENT}
						</div>
						<div className='container__outside_position-right'>
							<div className='container__inside_position'>
								<ALink
									link='https://github.com/andreimelo'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon
										source='Github'
										variant='icon'
										alt='twitterIcon'
									/>
								</ALink>
							</div>
							<div className='container__inside_position'>
								<ALink
									link='https://linkedin.com/in/andrei-melo-4a4635191'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon
										source='LinkedIn'
										variant='icon'
										alt='linkedInIcon'
									/>
								</ALink>
							</div>
							<div className='container__inside_position'>
								<ALink
									link='https://twitter.com/imdreimelo'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon
										source='Twitter'
										variant='icon'
										alt='githubIcon'
									/>
								</ALink>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
