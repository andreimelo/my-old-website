import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Input({ value, name, variant, placeholder, onChange }){
	return (
		<input
			value={value}
			name={name}
			placeholder={placeholder}
			className={variant}
			onChange={onChange}
		/>
	);
}

Input.propTypes = {
	value       : PropTypes.string,
	name        : PropTypes.string,
	variant     : PropTypes.string,
	placeholder : PropTypes.string,
	onChange    : PropTypes.func,
};

export default Input;
