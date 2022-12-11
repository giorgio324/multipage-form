const checkboxes = document.querySelectorAll(".online-service");

const uncheck = function () {
	checkboxes.forEach((checkbox) => {
		checkbox.checked = false;
	});
};
export default uncheck;
