const searchBtn = document.querySelector('.search-button');
const searchForm = document.querySelector('.search-wrap');

searchBtn.addEventListener('click', toggleSearch);

function toggleSearch(e) {
	searchForm.classList.toggle('active');
	searchBtn.classList.toggle('active'); 
}