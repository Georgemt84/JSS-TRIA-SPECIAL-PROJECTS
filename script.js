// Dropdown toggles for all nav items with submenus
document.addEventListener('DOMContentLoaded', function () {
	const dropdownItems = document.querySelectorAll('.has-dropdown');
	const toggles = Array.from(dropdownItems)
		.map(item => item.querySelector(':scope > a'))
		.filter(Boolean);

	function closeAll(exceptParent) {
		toggles.forEach(toggle => {
			const parent = toggle.closest('.has-dropdown');
			if (!parent || parent === exceptParent) return;
			parent.classList.remove('show');
			toggle.setAttribute('aria-expanded', 'false');
		});
	}

	toggles.forEach(toggle => {
		const parent = toggle.closest('.has-dropdown');
		if (!parent) return;

		toggle.classList.add('dropdown-toggle');
		toggle.setAttribute('aria-haspopup', 'true');
		toggle.setAttribute('aria-expanded', 'false');

		toggle.addEventListener('click', function (e) {
			e.preventDefault();
			const opening = !parent.classList.contains('show');
			closeAll(parent);
			parent.classList.toggle('show', opening);
			toggle.setAttribute('aria-expanded', opening ? 'true' : 'false');
		});

		toggle.addEventListener('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggle.click();
			}
		});

		// Desktop hover support
		parent.addEventListener('mouseenter', function () {
			if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
			closeAll(parent);
			parent.classList.add('show');
			toggle.setAttribute('aria-expanded', 'true');
		});

		parent.addEventListener('mouseleave', function () {
			if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
			parent.classList.remove('show');
			toggle.setAttribute('aria-expanded', 'false');
		});
	});

	document.addEventListener('click', function (e) {
		toggles.forEach(toggle => {
			const parent = toggle.closest('.has-dropdown');
			if (!parent || parent.contains(e.target)) return;
			parent.classList.remove('show');
			toggle.setAttribute('aria-expanded', 'false');
		});
	});

	document.addEventListener('keydown', function (e) {
		if (e.key !== 'Escape') return;
		closeAll();
	});
});
