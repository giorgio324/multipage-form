import changePage from "./switchPages.js";
import toggle from "./year-monthToggle.js";
import planSelect from "./planSelect.js";
import { planChoice } from "./planSelect.js";
import { monthly } from "./year-monthToggle.js";
import { backBtn } from "./switchPages.js";

const nextBtn = document.querySelector(".next-btn");
const toggleContainer = document.querySelector(".toggle-container");
const planItems = document.querySelectorAll(".plan-btn");

planItems.forEach((item) => {
	item.addEventListener("click", function (e) {
		planSelect(e);
	});
});

nextBtn.addEventListener("click", function () {
	changePage("next", planChoice, monthly);
});

backBtn.addEventListener("click", function () {
	changePage("prev");
});
toggleContainer.addEventListener("click", toggle);
// define go back function and import it
