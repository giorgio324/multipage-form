import changePageNumber from "./switchPageNum.js";
import { addOnsMonth } from "./add-on.js";
import { addOnsYear } from "./add-on.js";
import uncheck from "./add-on-helper.js";
import validatePhone from "./validatePhone.js";
import validateEmail from "./validateEmail.js";
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const footer = document.querySelector(".footer-container");
const allPages = [...document.querySelectorAll(".card")];
const incorectForm = [...document.querySelectorAll(".form-incorect")];
const planError = document.querySelector(".plan-error");
const finishContainer = document.querySelector(".finish-container");
export const backBtn = document.querySelector(".back-btn");
const confirmationBtn = document.querySelector(".next-btn");
export let pageNumber = 0;
const changePage = function (type, planChoice, monthly, monthPrice, yearPrice) {
	let userName = inputName.value;
	let userEmail = inputEmail.value;
	let userPhone = inputPhone.value;
	let currentPage;
	// quick username length varification
	if (userName.length < 7) {
		userName = false;
	}
	if (!userName || !validateEmail(userEmail) || !validatePhone(userPhone)) {
		incorectForm.forEach((form) => form.classList.add("hide"));

		!userName && incorectForm[0].classList.remove("hide");
		!validateEmail(userEmail) && incorectForm[1].classList.remove("hide");
		!validatePhone(userPhone) && incorectForm[2].classList.remove("hide");

		return;
	}
	if (type === "next") {
		if (pageNumber >= 0 && pageNumber < allPages.length - 1) {
			// if the user does not select plan
			if (pageNumber > 0 && !planChoice) {
				planError.classList.remove("hide");
				return;
			}
			if (pageNumber === 2) {
				confirmationBtn.textContent = "Confirm";
			}
			// if the user selects plan and goes monthly subscribtion
			if (pageNumber === 2 && planChoice && monthly) {
				const values = Object.values(addOnsMonth);
				const sum = values.reduce((accumulator, value) => {
					return accumulator + Number(value);
				}, 0);
				const finalPrice = sum + Number(monthPrice);
				finishContainer.innerHTML = `<section class="finish-container">
            <div class="current-stats">
              <div class="current-plan">
                <div class="plan-info">
                  <h3>${planChoice} (${monthly ? "monthly" : "yearly"})</h3>
                  <a href="" class="change">change</a>
                </div>
                <div class="final-price bold">+${monthPrice}/mo</div>
              </div>
              <div class="underline"></div>
			  ${Object.entries(addOnsMonth)
					.map(
						(entry, i) => `<div class="current-add-on-${i + 1}">
                <div class="plan-info">
                  <p>${entry[0]}</p>
                </div>
                <div class="final-price ">+$${entry[1]}/yr</div>
              </div>`
					)
					.join("")}
            </div>
            <div class="total-container">
              <p>Total (per <span class="total-time">${
					monthly ? "month" : "year"
				}</span>)</p>
              <div class="final-total-price bold">+$${finalPrice}/mo</div>
            </div>
          </section>`;
				let change = document.querySelector(".change");
				change.addEventListener("click", function (e) {
					e.preventDefault();
					changePage("change");
				});
			}
			// if the user selects plan and goes yearly subscription
			if (pageNumber === 2 && planChoice && !monthly) {
				const values = Object.values(addOnsYear);
				const sum = values.reduce((accumulator, value) => {
					return accumulator + Number(value);
				}, 0);
				const finalPrice = sum + Number(yearPrice);
				finishContainer.innerHTML = `<section class="finish-container">
            <div class="current-stats">
              <div class="current-plan">
                <div class="plan-info">
                  <h3>${planChoice} (${monthly ? "monthly" : "yearly"})</h3>
                  <a href="" class="change">change</a>
                </div>
                <div class="final-price bold">+${yearPrice}/yr</div>
              </div>
              <div class="underline"></div>
              ${Object.entries(addOnsYear)
					.map(
						(entry, i) => `<div class="current-add-on-${i + 1}">
                <div class="plan-info">
                  <p>${entry[0]}</p>
                </div>
                <div class="final-price ">+$${entry[1]}/yr</div>
              </div>`
					)
					.join("")}
            </div>
            <div class="total-container">
              <p>Total (per <span class="total-time">${
					monthly ? "month" : "year"
				}</span>)</p>
              <div class="final-total-price bold">+${finalPrice}/yr</div>
            </div>
          </section>`;
				let change = document.querySelector(".change");
				change.addEventListener("click", function (e) {
					e.preventDefault();
					changePage("change");
				});
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
		}
	}
	if (type === "prev") {
		if (pageNumber >= 0 && pageNumber < allPages.length - 1) {
			incorectForm.forEach((form) => form.classList.add("hide"));
			confirmationBtn.textContent = "Next step";
			if (pageNumber >= 2) {
				uncheck();
				for (const yearP in addOnsYear) {
					delete addOnsYear[yearP];
				}
				for (const monthP in addOnsMonth) {
					delete addOnsMonth[monthP];
				}
			}
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
	if (type === "change") {
		uncheck();
		confirmationBtn.textContent = "Next step";
		planError.classList.add("hide");
		for (const yearP in addOnsYear) {
			delete addOnsYear[yearP];
		}
		for (const monthP in addOnsMonth) {
			delete addOnsMonth[monthP];
		}
		allPages.forEach((page) => {
			page.classList.add("hide");
		});
		pageNumber = 1;
		currentPage = allPages[pageNumber];

		currentPage.classList.remove("hide");
		changePageNumber("change");
	}
};
export default changePage;
