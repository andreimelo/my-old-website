export function inputValidation(input){
	let error = {};
	if (!input.name) {
		error.name = 'Name is required';
	}
	if (!input.email) {
		error.email = 'Email is required';
	}
	if (!input.message) {
		error.message = 'Message is required';
	}
	if (!input.recaptcha) {
		error.message = 'ReCaptcha is required';
	}
	return error;
}
