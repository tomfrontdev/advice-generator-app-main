const btn = document.querySelector(".popup_button");
const adviceNumber = document
	.querySelector(".popup_advice")
	.querySelector("span");
const popupTitle = document.querySelector(".popup_title");
// const request = new XMLHttpRequest();
// request.open("GET", "https://api.adviceslip.com/advice");
// request.send();

// btn.addEventListener("click", function () {
// 	request.addEventListener("load", function () {
// 		console.log(this.responseText);
// 		const user = JSON.parse(this.responseText);
// 		console.log(user);
// 		const {
// 			slip: { id, advice },
// 		} = user;
// 		console.log(id, advice);
// 	});
// });

// LONGER VERSION //
// btn.addEventListener("click", function () {
// 	fetch("https://api.adviceslip.com/advice")
// 		.then(function (response) {
// 			// JSON returns a new promise, that's why we need to resolve promise one more time!
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data);
// 		});
// });

const showAdvice = function (e) {
	e.preventDefault();
	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => {
			const {
				slip: { id, advice },
			} = data;
			adviceNumber.textContent = id;
			popupTitle.textContent = advice;
		});
};

// LOAD ADVICE
window.addEventListener("load", (e) => showAdvice(e));

// ARROW FUNCTION - SHOW NEXT ADVICE
btn.addEventListener("click", (e) => showAdvice(e));
