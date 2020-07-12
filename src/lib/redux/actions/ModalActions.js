import { ModalType } from '../../../util/helpers/modal-helper';

export const showModal = (modalProps) => {
	return {
		type       : 'SHOW_MODAL',
		modalType  : ModalType,
		modalProps : modalProps || {},
	};
};
export const closeModal = () => ({
	type : 'HIDE_MODAL',
});
