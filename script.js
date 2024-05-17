'use strict';

//Elements
const toggleBtn = document.querySelector('.toggle');
const planPrice = document.querySelectorAll('.plan-price');

// Pricing
const pricing = {
	monthly: [19.99, 24.99, 39.99],
	yearly: [199.99, 249.99, 399.99]
};

// Function
const updatePrice = function (pricing) {
	toggleBtn.classList.toggle('active');

	planPrice.forEach(function (price, i) {
		if (!toggleBtn.classList.contains('active')) {
			toggleBtn.style.background = 'var(--btn-bg-toggle)';
			price.innerHTML = `<span>&dollar;</span>${pricing.yearly[i]}`;
		} else {
			toggleBtn.style.background = 'var(--btn-light-purple)';
			price.innerHTML = `<span>&dollar;</span>${pricing.monthly[i]}`;
		}
	});
};

// Event Listener
toggleBtn.addEventListener('click', function (e) {
	updatePrice(pricing);
});
