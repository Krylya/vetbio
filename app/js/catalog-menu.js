'use strict';

const catalogMenu = document.querySelector('#catalog-menu');
const catalogMenuList = document.querySelectorAll('.catalog-menu__item');
const catalogNameList = document.querySelectorAll('.catalog-menu__name');
const catalogSubMenuList = document.querySelectorAll('.catalog-sub-menu');
const closeSubMenuBtn = document.querySelector('.catalog-menu__close-button');

//const isSubMenuOpen = false;
if(catalogMenu) {

	catalogMenu.addEventListener('click', showCatalogSubMenu);
	closeSubMenuBtn.addEventListener('click', hideCatalogSubMenu);

	function showCatalogSubMenu(e) {
		if( !e.target.classList.contains('catalog-menu__name') ) return;

		let currentItem = e.target.parentNode;

		hideCatalogSubMenu();

		closeSubMenuBtn.classList.add('active');

		currentItem.classList.add('active');
	}

	function hideCatalogSubMenu() {
		catalogMenuList.forEach(function(item) {
			if(item.classList.contains('active')) item.classList.remove('active');
		})

		closeSubMenuBtn.classList.remove('active');
	}

	/* при наведении на десктопе */
	catalogMenu.addEventListener('mouseover', displayMenu);
	catalogMenu.addEventListener('mouseleave', hideMenu);

	function displayMenu(e) {
		catalogMenu.removeEventListener('click', showCatalogSubMenu);

		if(e.target.classList.contains('catalog-menu__name')) {

			catalogSubMenuList.forEach(function(item, i){
				item.style.display = 'none';
				catalogNameList[i].classList.remove('activeTitle');
			});

			let currentSubMenu = e.target.parentNode.querySelector('.catalog-sub-menu');

			currentSubMenu.style.display = 'block';
			e.target.classList.add('activeTitle');
		}
	}

	function hideMenu() {
		catalogMenu.addEventListener('click', showCatalogSubMenu);
		
		catalogSubMenuList.forEach(function(item, i){
			item.style.display = 'none';
			catalogNameList[i].classList.remove('activeTitle');
		});
	}
}