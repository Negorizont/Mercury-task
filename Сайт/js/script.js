var formContainer = document.querySelector('.form')
var form = document.forms.login;
var containUser = document.querySelector('.contain');


var loginUser = function () {
	formContainer.style.display = 'none';
	containUser.style.display = 'block';
	(form.elements.email).style.border = "none";
	(form.elements.email).style.color = "#262626";
	(form.elements.password).style.border = "none";
}

var loggedIncorrect = function () {
	(form.querySelector('p')).style.display = 'block';
	(form.elements.email).style.border = "1px solid #ED4159";
	(form.elements.email).style.color = "#ED4159";
	(form.elements.password).style.border = "1px solid #ED4159";
}


form.addEventListener ('submit', function(e) {
	//отменяем действия браузера
	e.preventDefault()

	//1. сохраняем введённые данные в объект
	var user = {
		email: form.email.value,
		password: form.password.value
	}

	//перевод в json
	var json = JSON.stringify(user);

	//2. отправляем данные на сервер
	let request = new XMLHttpRequest();
	//разрешаем отсылать на другой источник, но надо ли это

	//выполняем пост запрос по адресу
	request.open("POST", "https://us-central1-mercdev-academy.cloudfunctions.net/login", true);
	// В заголовках запроса нужно указать: Content-Type: application/json | надо ли указывать кодировку?!
	request.setRequestHeader('content-type', 'application/json');

	//отправка данных
	request.send(json);


	//вроде проверка на ответ
	request.onreadystatechange = function () {
    	if (request.readyState == 4 && request.status == 200)
        	loginUser();
        else if (containUser.style.display != 'block') {
        	loggedIncorrect();
    	}
	}
});

//выходит с аккаунта
var unlog = function(){
	var logout = containUser.querySelector('input');

	logout.addEventListener('click', function () {
		(form.querySelector('p')).style.display = 'none';
		formContainer.style.display = 'block';
		containUser.style.display = 'none';
	});
};
unlog();

