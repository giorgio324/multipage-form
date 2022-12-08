let pageBtnNum = 0;
const pagesBtn = [...document.querySelectorAll(".btn-round")];
let currentPageNumber;
const changePageNumber = function (type) {
	if (type === "next") {
		if (pageBtnNum >= 0 && pageBtnNum < pagesBtn.length - 1) {
			pagesBtn.forEach((page) => {
				page.classList.remove("active-btn");
			});
			pageBtnNum++;
			currentPageNumber = pagesBtn[pageBtnNum];
			currentPageNumber.classList.add("active-btn");
			console.log(currentPageNumber);
		}
	}
	if (type === "prev") {
		if (pageBtnNum >= 0 && pageBtnNum < pagesBtn.length - 1) {
			pagesBtn.forEach((page) => {
				page.classList.remove("active-btn");
			});
			pageBtnNum--;
			currentPageNumber = pagesBtn[pageBtnNum];
			currentPageNumber.classList.add("active-btn");
			console.log(currentPageNumber);
		}
	}
};
export default changePageNumber;
