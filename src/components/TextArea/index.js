import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function TextArea({ value, name, variant, placeholder, onChange }){
	return (
		<textarea
			value={value}
			name={name}
			placeholder={placeholder}
			className={variant}
			onChange={onChange}
		/>
	);
}

TextArea.propTypes = {
	name        : PropTypes.string,
	variant     : PropTypes.string,
	placeholder : PropTypes.string,
	onChange    : PropTypes.func,
};

export default TextArea;
