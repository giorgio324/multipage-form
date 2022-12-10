export const addOnList = new Set();
const check = function (e) {
	let t = e.target;
	let add = t.closest(".add-on-btn");
	let checkB = add.querySelector(".online-service");

	if (checkB.checked === false) {
		checkB.checked = true;
		addOnList.add(checkB.dataset.box);
		console.log(addOnList);
	} else {
		checkB.checked = false;
		addOnList.delete(checkB.dataset.box);
		console.log(addOnList);
	}
};
export default check;
