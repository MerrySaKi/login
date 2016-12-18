
function changeBg(obj,num) {
	obj.style.zIndex = num;
}

function changeMenu(obj, val) {
	obj.style.transform = "translateX(" + val + "px)";
	obj.style.transition = "all 0.5s ease";
}