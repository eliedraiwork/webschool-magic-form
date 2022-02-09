function checkCredentials(username, password) {
	const data = {
		elie: '123456',
	};

	return data[username] === password;
}

function init() {
	if (localStorage.isLoggedIn === 'true') {
		displayImage();
	}
}

function login() {
	const username = document.querySelector('#input-username').value;
	const password = document.querySelector('#input-password').value;

	//  case 1: one of the field is empty
	if (username === '' || password === '') {
		if (username === '') {
			addRedBorder(document.querySelector('#input-username'));
		}
		if (password === '') {
			addRedBorder(document.querySelector('#input-password'));
		}
		return;
	}

	//  case 2: username and password are incorrect
	if (!checkCredentials(username, password)) {
		//TODO: display error to user
		document.querySelector('.error-div').style.display = 'block';
		return;
	}

	//  case 3: username and password are correct
	localStorage.setItem('isLoggedIn', 'true');
	localStorage.setItem('username-magic-form', username);
	displayImage();
}

function swapDiv() {
	const none = 'none',
		flex = 'flex';

	const divLogin = document.querySelector('#div-login');
	const divSuccess = document.querySelector('#div-success');
	if (divLogin.style.display === none) {
		divLogin.style.display = flex;
		divSuccess.style.display = none;
	} else {
		divLogin.style.display = none;
		divSuccess.style.display = flex;
	}
}

function displayImage() {
	const divLogin = document.querySelector('#div-login');
	const divSuccess = document.querySelector('#div-success');
	divLogin.style.display = 'none';
	divSuccess.style.display = 'block';

	document.querySelector('#p-username').innerHTML = localStorage.getItem(
		'username-magic-form'
	);
}

function addRedBorder(element) {
	element.classList.add('red-border');
}

document.querySelector('#btn-login').addEventListener('click', login);

document
	.querySelector('#input-username')
	.addEventListener('input', function (event) {
		if (event.target.value !== '') {
			event.target.classList.remove('red-border');
		}
		document.querySelector('.error-div').style.display = 'none';
	});

document
	.querySelector('#input-password')
	.addEventListener('input', function (event) {
		if (event.target.value !== '') {
			event.target.classList.remove('red-border');
		}
		document.querySelector('.error-div').style.display = 'none';
	});

init();
