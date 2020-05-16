const accordionButtonList = document.querySelectorAll('.product-accordion button');

accordionButtonList.forEach((item) => {
	item.addEventListener('click', showAccordionContent);
});

function showAccordionContent(e) {
	let target = e.target;
	target.parentNode.parentNode.classList.toggle('active');
}