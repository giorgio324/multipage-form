import changePage from "./switchPages.js";
import toggle from "./year-monthToggle.js";
import planSelect from "./planSelect.js";
import check from "./add-on.js";
import { planChoice } from "./planSelect.js";
import { monthly } from "./year-monthToggle.js";
import { backBtn } from "./switchPages.js";
import { planMonthPrice } from "./planSelect.js";
import { planYearPrice } from "./planSelect.js";
const nextBtn = document.querySelector(".next-btn");
const toggleContainer = document.querySelector(".toggle-container");
const planItems = document.querySelectorAll(".plan-btn");
const addOn = document.querySelectorAll(".add-on-btn");
const change = document.querySelector(".change");

planItems.forEach((item) => {
	item.addEventListener("click", function (e) {
		planSelect(e);
	});
});

addOn.forEach((item) => {
	item.addEventListener("click", function (e) {
		check(e);
	});
});

nextBtn.addEventListener("click", function () {
	changePage("next", planChoice, monthly, planMonthPrice, planYearPrice);
});

backBtn.addEventListener("click", function () {
	changePage("prev");
});

toggleContainer.addEventListener("click", toggle);
// define go back function and import it
change.textContent = "a";
change.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("aaaaaaaaa");
	changePage("change");
});
