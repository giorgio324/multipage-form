import changePageNumber from "./switchPageNum.js";
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const footer = document.querySelector(".footer-container");
const allPages = [...document.querySelectorAll(".card")];
const incorectForm = [...document.querySelectorAll(".form-incorect")];
export const backBtn = document.querySelector(".back-btn");
export let pageNumber = 0;

const changePage = function (type, planChoice, monthly) {
	let userName = inputName.value;
	let userEmail = inputEmail.value;
	let userPhone = inputPhone.value;
	let currentPage;
	if (!userName || !userEmail || !userPhone) {
		incorectForm.forEach((form) => form.classList.remove("hide"));
		return;
	}
	if (type === "next") {
		if (pageNumber >= 0 && pageNumber < allPages.length - 1) {
			console.log(pageNumber);
			if (pageNumber === 1 && planChoice && monthly) {
			}
			if (pageNumber === 1 && planChoice && !monthly) {
				console.log("i work");
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
