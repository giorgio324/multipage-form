const toggleCircle = document.querySelector(".toggle-circle");
let monthly = true;

const toggle = function () {
	if (monthly) {
		toggleCircle.classList.add("move-circle");
	}
	if (!monthly) {
		toggleCircle.classList.remove("move-circle");
	}
	monthly = !monthly;
};
export default toggle;
