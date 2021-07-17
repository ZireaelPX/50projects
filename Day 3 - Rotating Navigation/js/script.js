const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const container = document.querySelector('.container');

openMenu.addEventListener('click', () => {
	container.classList.add('show-nav');
});

closeMenu.addEventListener('click', () => {
	container.classList.remove('show-nav');
});
