$(document).ready(function () {
	$(".btn1").click(function () {
		$(".img1").css("marginLeft", "0");
	});
	$(".btn2").click(function () {
		$(".img1").css("marginLeft", "-20%");
	});
	$(".btn3").click(function () {
		$(".img1").css("marginLeft", "-40%");
	});
	$(".btn4").click(function () {
		$(".img1").css("marginLeft", "-60%");
	});
	$(".btn5").click(function () {
		$(".img1").css("marginLeft", "-80%");
	});
	$(".btn6").click(function () {
		$(".img1").css("marginLeft", "-100%");
	});
	$("a").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
});
