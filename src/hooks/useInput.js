import { useState, useEffect } from 'react';

export const useInput = (validate) => {
	const [
		input,
		setInput,
	] = useState({});
	const [
		errors,
		setErrors,
	] = useState({});
	const [
		isSubmitting,
		setIsSubmitting,
	] = useState(false);

	useEffect(
		() => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
				handleSubmit();
			}
		},
		[
			errors,
			isSubmitting,
		],
	);
	function handleSubmit(event){
		if (event) {
			event.preventDefault();
		}
		setIsSubmitting(true);
		setErrors(validate(input));
	}
	function handleChange(event){
		event.persist();
		setInput((input) => ({ ...input, [event.target.name]: event.target.value }));
	}
	// async function handleSubmitForm(){
	// 	try {
	// 		let data = await login({
	// 			variables: { email: `${input.username}`, password: `${input.password}` },
	// 		});
	// 		if (data) {
	// 			setInput({ ...input, username: '', password: '' });
	// 		}
	// 	} catch (error) {
	// 		await setErrors(IncorrectAuth(error));
	// 	}
	// }
	return {
		input,
		errors,
		handleChange,
		handleSubmit,
	};
};
