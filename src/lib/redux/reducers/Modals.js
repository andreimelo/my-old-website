const initialState = {
	modalType  : null,
	modalProps : {},
	isOpen     : false,
};

const Modals = (state = initialState, action) => {
	switch (action.type) {
		case 'SHOW_MODAL':
			return {
				modalType  : action.modalType,
				modalProps : action.modalProps,
				isOpen     : true,
			};
		case 'HIDE_MODAL':
			return initialState;
		default:
			return state;
	}
};

export default Modals;
