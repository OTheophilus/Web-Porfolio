let menBtn = document.getElementById("menuic");
let closeBtn = document.getElementById("closeMen");
let menu = document.querySelector(".nav");
let content = document.querySelector(".content");
let menuItem1 = document.getElementById("item1");
let menuItem2 = document.getElementById("item2");
let menuItem3 = document.getElementById("item3");
let menuItem4 = document.getElementById("item4");

menBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
content.addEventListener("click", clickCon);

function showMenu(){
	menu.style.animation = "transin 1s forwards";
	menBtn.style.animation = "menIntro .5s forwards";
	menu.style.visibility = "visible";
}
function hideMenu() {
	menu.style.animation = "transout 1s";
	menBtn.style.animation = "menOutro 2s";
}

function clickCon() {
	if (menu.style.visibility === "visible"){
		menu.style.animation = "transout .1s";
		menBtn.style.animation = "menOutro 1s";
	}
}

function whereAmI() {
	menuItem.style.backgroundColor = "white";
	menuItem.style.color = "black";
	menuItem.style.textDecoration = "underline";
}