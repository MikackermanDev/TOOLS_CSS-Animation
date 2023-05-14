// document.addEventListener("contextmenu", function (event) {
// 	event.preventDefault();
// });

let elements = document.querySelectorAll(".no-right-click");

elements.forEach(function (element) {
	element.addEventListener("contextmenu", function (event) {
		event.preventDefault();
	});
});

let string1 = "Lorem ipsum dolor sit amet.";
let string2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
let string3 = "Lorem, ipsum.";

let typed = new Typed(document.querySelector(".frappe-auto"), {
	strings: [string1, string2, string3],
	typeSpeed: 50,
	showCursor: false,
	loop: true,
	fadeOut: true,
	fadeOutClass: "typed-fade-out",
	fadeOutDelay: 1000,
});
