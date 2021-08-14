const box = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes() {

	console.log(window.innerHeight / 5 * 4);

	const triggerBottom = window.innerHeight / 5 * 4;
	box.forEach((item) => {
		const boxTop = item.getBoundingClientRect().top;
		if (boxTop < triggerBottom) {
			item.classList.add('show');
		} else {
			item.classList.remove('show');
		}
	});
}