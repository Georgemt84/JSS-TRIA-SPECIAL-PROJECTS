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
// --- login modal + responsive handling -------------------------------------------------
// the markup is injected so it doesn't need to be duplicated in every HTML page

function createLoginModal() {
	const loginHtml = `
		<div id="loginModal" class="login-modal" aria-hidden="true">
			<div class="modal-content">
				<span class="close-btn" aria-label="Close">&times;</span>
				<h2>Login</h2>
				<form id="loginForm">
					<label for="username">Username</label>
					<input type="text" id="username" name="username" required>
					<label for="password">Password</label>
					<input type="password" id="password" name="password" required>
					<button type="submit" class="btn-login">Submit</button>
				</form>
			</div>
		</div>`;
	document.body.insertAdjacentHTML('beforeend', loginHtml);
}

function setupLogin() {
	const openBtn = document.getElementById('openLoginBtn');
	const modal = document.getElementById('loginModal');
	if (!openBtn || !modal) return;
	const closeBtn = modal.querySelector('.close-btn');

	function showModal() {
		modal.classList.add('show');
		modal.setAttribute('aria-hidden', 'false');
		adjustLoginLayout();
	}

	function hideModal() {
		modal.classList.remove('show');
		modal.setAttribute('aria-hidden', 'true');
	}

	openBtn.addEventListener('click', showModal);
	closeBtn.addEventListener('click', hideModal);

	modal.addEventListener('click', e => {
		if (e.target === modal) hideModal();
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && modal.classList.contains('show')) {
			hideModal();
		}
	});

	window.addEventListener('resize', adjustLoginLayout);

	function adjustLoginLayout() {
		if (window.innerWidth < 600) {
			modal.classList.add('mobile');
		} else {
			modal.classList.remove('mobile');
		}
	}

	// very simple client-side form handler for demonstration
	const loginForm = document.getElementById('loginForm');
	loginForm.addEventListener('submit', function (e) {
		e.preventDefault();
		const user = loginForm.username.value.trim();
		const pass = loginForm.password.value.trim();
		if (user && pass) {
			alert(`Logged in as ${user}`);
			hideModal();
		} else {
			alert('Please enter both username and password.');
		}
	});
}

// run modal creation & setup on DOM ready
document.addEventListener('DOMContentLoaded', function () {
	createLoginModal();
	setupLogin();
});