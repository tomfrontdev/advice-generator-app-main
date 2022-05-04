const request = new XMLHttpRequest();
request.open("GET", "https://api.adviceslip.com/advice");
request.send();

request.addEventListener("load", function () {
	console.log(this.responseText);
	const user = JSON.parse(this.responseText);
	console.log(user);
	const {
		slip: { id, advice },
	} = user;
	console.log(id, advice);
});
