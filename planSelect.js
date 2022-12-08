export const planItems = document.querySelectorAll(".plan-btn");
export let planChoice;
const planSelect = function (e) {
	let t = e.target;
	let plan = t.closest(".plan-btn");
	planChoice = plan.dataset.id;
	planItems.forEach((item) => item.classList.remove("plan-active"));
	plan.classList.add("plan-active");
};

export default planSelect;
