function validatePhone(phoneNumber) {
	const phoneRGEX = /^(\+?995)?(79\d{7}|5\d{8})$/;
	const phoneResult = phoneRGEX.test(phoneNumber);
	if (phoneResult == false) {
		return false;
	}
	return true;
}
export default validatePhone;
