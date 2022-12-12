import { monthly } from "./year-monthToggle.js";
export let addOnsMonth = {};
export let addOnsYear = {};
const check = function (e) {
	let t = e.target;
	let add = t.closest(".add-on-btn");
	let checkB = add.querySelector(".online-service");
	console.log(t);
	console.log(add);
	console.log(checkB);
	if (monthly) {
		if (checkB.checked === false) {
			console.log("a");
			checkB.checked = true;
			let dataName = checkB.dataset.box;
			let dataPrice = checkB.dataset.addmonthprice;
			addOnsMonth[dataName] = dataPrice;
		} else {
			checkB.checked = false;
			let dataName = checkB.dataset.box;
			delete addOnsMonth[dataName];
		}
	}
	if (!monthly) {
		if (checkB.checked === false) {
			console.log("a");
			checkB.checked = true;
			let dataName = checkB.dataset.box;
			let dataPrice = checkB.dataset.addyearprice;
			addOnsYear[dataName] = dataPrice;
		} else {
			checkB.checked = false;
			let dataName = checkB.dataset.box;
			delete addOnsYear[dataName];
		}
	}
};
export default check;
