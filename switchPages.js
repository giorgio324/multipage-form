import changePageNumber from "./switchPageNum.js";
import { addOnList } from "./add-on.js";
const card = document.querySelector(".content-container");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const footer = document.querySelector(".footer-container");
const allPages = [...document.querySelectorAll(".card")];
const incorectForm = [...document.querySelectorAll(".form-incorect")];
const planError = document.querySelector(".plan-error");
export const backBtn = document.querySelector(".back-btn");
export let pageNumber = 0;
const changePage = function (type, planChoice, monthly) {
	let userName = inputName.value;
	let userEmail = inputEmail.value;
	let userPhone = inputPhone.value;
	let currentPage;
	if (!userName || !userEmail || !userPhone) {
		incorectForm.forEach((form) => form.classList.add("hide"));

		!userName && incorectForm[0].classList.remove("hide");
		!userEmail && incorectForm[1].classList.remove("hide");
		!userPhone && incorectForm[2].classList.remove("hide");

		return;
	}
	if (type === "next") {
		if (pageNumber >= 0 && pageNumber < allPages.length - 1) {
			// if the user does not select plan
			if (pageNumber > 0 && !planChoice) {
				planError.classList.remove("hide");
				return;
			}
			// to do
			// if the user selects plan and goes monthly subscribtion
			if (pageNumber === 2 && planChoice && monthly) {
				console.log("monthly");
				console.log(addOnList);
			}
			// to do
			// if the user selects plan and goes yearly subscription
			if (pageNumber === 2 && planChoice && !monthly) {
				console.log("yearly");
				console.log(addOnList);
			}
			allPages.forEach((page) => {
				page.classList.add("hide");
			});
			pageNumber++;
			currentPage = allPages[pageNumber];
			currentPage.classList.remove("hide");

			if (pageNumber > 0) {
				backBtn.style.visibility = "visible";
			}
			if (pageNumber == allPages.length - 1) {
				footer.classList.add("hide");
			}
			changePageNumber("next");
			console.log(planChoice, monthly);
		}
	}
	if (type === "prev") {
		if (pageNumber >= 0 && pageNumber < allPages.length - 1) {
			allPages.forEach((page) => {
				page.classList.add("hide");
			});
			pageNumber--;
			currentPage = allPages[pageNumber];

			currentPage.classList.remove("hide");

			if (pageNumber < 1) {
				backBtn.style.visibility = "hidden";
			}
			changePageNumber("prev");
		}
	}
};
export default changePage;
