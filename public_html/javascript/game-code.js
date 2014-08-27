var cookie;

var cursor;
var cursorCount;
var cursorCost;
var cursorInfo;

var grandma;
var grandmaCount;
var grandmaCost;
var grandmaInfo;

var factory;
var factoryCount;
var factoryCost;
var factoryInfo;

var mine;
var mineCount;
var mineCost;
var mineInfo;

var cookieCountText;
var clicks;

var cookiesPerSecond;
var cookiesPerSecondText;

window.onload = function() {
    Initialize();
	setInterval(gameLoop, 1000 / 60);
	setInterval(increaseCookies, 1000);
};

function Initialize() { 
    clicks = 0;
	cookiesPerSecond = 0;
    
    cookie = document.getElementById("cookie");
    cookie.addEventListener("click", clicked, false);
 
    cookieCountText = document.getElementById("cookieCount");
	cookiesPerSecondText = document.getElementById("cookiesPerSecond");
	
	cursor = document.getElementById("cursor");
	cursorInfo = document.getElementById("cursorInfo");
	cursorCost = 15;
	cursorCount = 0;
	
	grandma = document.getElementById("grandma");
	grandmaInfo = document.getElementById("grandmaInfo");
	grandmaCost = 100;
	grandmaCount = 0;
	
	factory = document.getElementById("factory");
	factoryInfo = document.getElementById("factoryInfo");
	factoryCost = 500;
	factoryCount = 0;
	
	mine = document.getElementById("mine");
	mineInfo = document.getElementById("mineInfo");
	mineCost = 2000;
	mineCount = 0;
}

function clicked() {
    clicks++;
}

function gameLoop() {
    if (clicks >= mineCost) {
        cursor.className = "enabled";
		cursor.onclick = function() { upgrade("cursor") };
		
		grandma.className = "enabled";
		grandma.onclick = function() { upgrade("grandma") };
		
		factory.className = "enabled";
		factory.onclick = function() { upgrade("factory") };
		
		mine.className = "enabled";
		mine.onclick = function() { upgrade("mine") };
	}
	else if(clicks >= factoryCost) {
        cursor.className = "enabled";
		cursor.onclick = function() { upgrade("cursor") };
		
		grandma.className = "enabled";
		grandma.onclick = function() { upgrade("grandma") };
		
		factory.className = "enabled";
		factory.onclick = function() { upgrade("factory") };

		mine.className = "disabled";
		mine.onclick = "";
	}	
	else if(clicks >= grandmaCost) {
        cursor.className = "enabled";
		cursor.onclick = function() { upgrade("cursor") };
		
		grandma.className = "enabled";
		grandma.onclick = function() { upgrade("grandma") };
		
		factory.className = "disabled";
		factory.onclick = "";
		
		mine.className = "disabled";
		mine.onclick = "";
	}
	else if (clicks >= cursorCost) {
        cursor.className = "enabled";
		cursor.onclick = function() { upgrade("cursor") };
		
		grandma.className = "disabled";
		grandma.onclick = "";
		
		factory.className = "disabled";
		factory.onclick = "";
		
		mine.className = "disabled";
		mine.onclick = "";
    }
	else {
		cursor.className = "disabled";
		cursor.onclick = "";
		
		grandma.className = "disabled";
		grandma.onclick = "";
		
		factory.className = "disabled";
		factory.onclick = "";
		
		mine.className = "disabled";
		mine.onclick = "";
	}
	
	
	var cookiesPerSecondToTenths = cookiesPerSecond.toFixed(1);
	cookiesPerSecondText.textContent = "Cookies Per Second: " + cookiesPerSecondToTenths;
	
	var cookieCountToNearestInt = Math.floor(clicks)
	cookieCountText.textContent = "Cookies: " + cookieCountToNearestInt;
	
	var cursorCostToNearestInt = Math.floor(cursorCost);
	cursorInfo.innerHTML = "Cost: " + cursorCostToNearestInt + "<br />" + "Count: " + cursorCount;
	
	var grandmaCostToNearestInt = Math.floor(grandmaCost);
	grandmaInfo.innerHTML = "Cost: " + grandmaCostToNearestInt + "<br />" + "Count: " + grandmaCount;

	var factoryCostToNearestInt = Math.floor(factoryCost);
	factoryInfo.innerHTML = "Cost: " + factoryCostToNearestInt + "<br />" + "Count: " + factoryCount;

	var mineCostToNearestInt = Math.floor(mineCost);
	mineInfo.innerHTML = "Cost: " + mineCostToNearestInt + "<br />" + "Count: " + mineCount;
}

function upgrade(name) {
	switch(name) {
		case "cursor":
			cookiesPerSecond += 0.1;
			clicks -= cursorCost;
			cursorCost += cursorCost * 0.15;
			cursorCount++;
			break;
		case "grandma":
			cookiesPerSecond += 0.8;
			clicks -= grandmaCost;
			grandmaCost += grandmaCost * 0.15;
			grandmaCount++;
			break;
		case "factory":
			cookiesPerSecond += 4;
			clicks -= factoryCost;
			factoryCost += factoryCost * 0.1;
			factoryCount++;
			break;
		case "mine":
			cookiesPerSecond += 10;
			clicks -= mineCost;
			mineCost += mineCost * 0.15;
			mineCount++;
			break;
		default:
			break;
	}
}

function increaseCookies() {
	clicks += cookiesPerSecond;
}