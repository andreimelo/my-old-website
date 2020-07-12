import React from 'react';
import { useSelector } from 'react-redux';
import { ModalType } from '../../util/helpers/modal-helper';

const Modal = () => {
	const { modalType, modalProps } = useSelector(({ Modals }) => Modals);
	console.log(modalType);
	const SpecificModal = ModalType[modalType];
	if (!modalType) {
		return null;
	}
	return <SpecificModal {...modalProps} />;
};

export default Modal;
