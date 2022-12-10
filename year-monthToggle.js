import { planItems } from "./planSelect.js";
const toggleCircle = document.querySelector(".toggle-circle");
const planTrials = document.querySelectorAll(".trial");
const planPrices = document.querySelectorAll(".plan-price");
export let monthly = true;
const priceMonthlyPlan = [9, 12, 15, 1, 2, 2];
const priceYearlyPlan = [90, 120, 150, 10, 20, 20];
const toggle = function () {
	if (monthly) {
		toggleCircle.classList.add("move-circle");
		planTrials.forEach((trial) => trial.classList.remove("hide"));
		planPrices.forEach((price, i) => {
			price.textContent = `$${priceYearlyPlan[i]}/yr`;
		});
	}
	if (!monthly) {
		toggleCircle.classList.remove("move-circle");
		planTrials.forEach((trial) => trial.classList.add("hide"));
		planPrices.forEach((price, i) => {
			price.textContent = `$${priceMonthlyPlan[i]}/mo`;
		});
	}
	monthly = !monthly;
};
export default toggle;
