import ContactMeModal from '../../components/Modal/ContactMeModal';

const MODAL_COMPONENT = {
	CONTACT_ME_MODAL : ContactMeModal,
};
const MODAL_NAME = {
	CONTACT_ME_MODAL : 'CONTACT_ME_MODAL',
};
const MODAL_ACTION = {
	SHOW_MODAL : 'SHOW_MODAL',
	HIDE_MODAL : 'HIDE_MODAL',
};
export const ModalType = MODAL_COMPONENT;
export const ModalName = MODAL_NAME;
export const ModalAction = MODAL_ACTION;

export async function closeResetPasswordModal(dispatch){
	return await dispatch({ type: ModalAction.HIDE_MODAL });
}
