// const toggleContainer = document.querySelector(".toggle-container");
// const toggleCircle = document.querySelector(".toggle-circle");
// let toggled = false;
// toggleContainer.addEventListener("click", function () {
// 	if (!toggled) {
// 		toggleCircle.classList.add("move-circle");
// 	} else {
// 		toggleCircle.classList.remove("move-circle");
// 	}
// 	toggled = !toggled;
// });

// this changes numbers on buttons
let pageNum = 1;
const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");
const pages = [...document.querySelectorAll(".btn-round")];
console.log(pages);

nextBtn.addEventListener("click", () => {
	if (pageNum < 4 && pageNum >= 0) {
		let currentPage = pages[pageNum];
		pages.forEach((page) => {
			page.classList.remove("active-btn");
		});
		pageNum++;
		currentPage.classList.add("active-btn");
		console.log(currentPage);
	} else {
		console.log(`${pageNum}`);
	}
});
// end
