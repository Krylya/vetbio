var toggleButton = document.querySelector('.toggle-button');
var	container = document.querySelector('.main-menu-wrapper');

toggleButton.addEventListener('click', function() {
	toggleButton.classList.toggle('show');
	container.classList.toggle('show');
});
