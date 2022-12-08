import { planItems } from "./planSelect.js";
const toggleCircle = document.querySelector(".toggle-circle");
const planTrials = document.querySelectorAll(".trial");
export let monthly = true;

const toggle = function () {
	if (monthly) {
		toggleCircle.classList.add("move-circle");
		planTrials.forEach((trial) => trial.classList.remove("hide"));
	}
	if (!monthly) {
		toggleCircle.classList.remove("move-circle");
		planTrials.forEach((trial) => trial.classList.add("hide"));
	}
	planItems.forEach((item) => item.classList.remove("plan-active"));
	monthly = !monthly;
};
export default toggle;
