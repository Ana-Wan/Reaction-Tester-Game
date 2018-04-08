var start = new Date().getTime();
var bestTime = 1000000;
var count = 0;
var totalTime = 0;
var average = 0;

// generate random colors
function getRandomColor(){
	var letters = '0123456789ABCDEF'.split('');
	var colors = "#";
	for(var i = 0; i < 6; ++i){
		colors += letters[Math.floor(Math.random() * 16)];
	}
	return colors;
}

//makes shape visible
function makeShapeAppear(){

	var top = Math.random() * 400;
	var left = Math.random() * 400;
	var size = (Math.random() * 100) + 100;

	if(Math.random() > 0.5){
		document.getElementById("shape").style.borderRadius = "50%";
	} else {
		document.getElementById("shape").style.borderRadius = "0";
	}

	document.getElementById("shape").style.backgroundColor = getRandomColor();
	document.getElementById("shape").style.top = top + "px";
	document.getElementById("shape").style.left = left + "px";
	document.getElementById("shape").style.width = size + "px";
	document.getElementById("shape").style.height = size + "px";
	document.getElementById("shape").style.display = "block";
	start = new Date().getTime();

}

//makes shape visible after a random number of seconds
function appearAfterDelay(){

	setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

//finds time between last clicked and new click
document.getElementById("shape").onclick = function() {

	document.getElementById("shape").style.display = "none";

	++count;

	var end = new Date().getTime(); //time when just clicked;

	var timeTaken = (end - start) / 1000;

	totalTime += timeTaken;

	average = (totalTime / count).toFixed(3);

	if(timeTaken < bestTime){
		bestTime = timeTaken;
	}

	document.getElementById("averageTime").innerHTML = average;

	document.getElementById("count").innerHTML = count;

	document.getElementById("bestTime").innerHTML = bestTime + "s";

	document.getElementById("displayTime").innerHTML = timeTaken + "s"; 

	appearAfterDelay();  // makes new shape appear

}

document.getElementById("stopGame").onclick = function() {
	document.getElementById("shape").style.display = "none";
}

document.getElementById("restartGame").onclick = function(){
	location.reload();
}