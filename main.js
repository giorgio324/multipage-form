import changePage from "./switchPages.js";
import toggle from "./year-monthToggle.js";
import { backBtn } from "./switchPages.js";
const nextBtn = document.querySelector(".next-btn");
const toggleContainer = document.querySelector(".toggle-container");
nextBtn.addEventListener("click", function () {
	changePage("next");
});

backBtn.addEventListener("click", function () {
	changePage("prev");
});
toggleContainer.addEventListener("click", toggle);
// define go back function and import it
