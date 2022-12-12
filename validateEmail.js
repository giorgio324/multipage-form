function validateEmail(email) {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	const emailResult = re.test(email);
	if (emailResult == false) {
		return false;
	}
	return true;
}
export default validateEmail;
