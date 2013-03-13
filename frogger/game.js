//get sprite image 
sprite = new Image();
sprite.src = "assets/frogger_sprites.png"; 

//global variables
var intervalId; 
oldFrogX = 0;
oldFrogY = 0; 
startX = 200;
startY = 475; 
numLives = 3; 
level = 1; 
score = 0; 
highScore = 0;
numSafeFrogs = 0; 
time = 120; 
speedLogs = 60; 
speedCars = 500; 
startLeft = -500;
startLeft1 = -500; 
//interval = 60; 
canvasX = 500;
canvasY = 565; 
//log variables
medLogX = 155;
medLogY = 300; 
boardLogX = 250; 
boardLogY = 40;
posLogX = 40; 
posLogY = 160;
var l1 = 40; 
var l2 = 0;
var l3 = 0; 
var l4 = 0; 
var l5 = 0; 
var l6 = 0; 
var posLog1 = 0; 
var posLog2 = 0; 
var pCarRight = 0;
var pCarLeft = 0; 
var cWidth = 30;
var cHeight = 23; 
allSprites = new Array();
allCarsLeft = new Array();
allCarsRight = new Array();
lilyPads = new Array(); 

frog = new Object();
frog.x = 200; frog.y = 475; frog.width = 30; frog.height = 25;
allSprites.push(frog); 

log1 = new Object();
log1.x = 0; log1.y = 125; log1.width = 300; log1.height = 40;
allSprites.push(log1);

log2 = new Object();
log2.x = 180; log2.y = 90; log2.width = 300; log2.height = 40;
allSprites.push(log2);

log3 = new Object();
log3.x = 150; log3.y = 165; log3.width = 300; log3.height = 40;
allSprites.push(log3); 

log4 = new Object();
log4.x = -100; log4.y = 165; log4.width = 300; log4.height = 40;
allSprites.push(log4);

log5 = new Object();
log5.x = 400; log5.y = 205; log5.width = 250; log5.height = 36;
allSprites.push(log5);

log6 = new Object();
log6.x = 200; log6.x = 205; log6.width = 350; log6.height = 38;
allSprites.push(log6);

log7 = new Object();
log7.x = 150; log7.y = 240; log7.width = 250; log7.height = 38;
allSprites.push(log7);

log8 = new Object();
log8.x = 300; log8.y = 125; log8.width = 250; log8.height = 36;
allSprites.push(log8);

log9 = new Object();
log9.x = 500; log9.y = 165; log9.width = 250; log9.height = 36;
allSprites.push(log9);

log10 = new Object();
log10.x = 350; log10.y = 240; log10.width = 300; log10.height = 40;
allSprites.push(log10); 

car1 = new Object(); 
car1.x = 30; car1.y = 340; car1.width = cWidth; car1.height = cHeight;
allSprites.push(car1);
allCarsRight.push(car1); 

car2 = new Object();
car2.x = 210; car2.y = 340; car2.width = cWidth; car2.height = cHeight;
allSprites.push(car2);
allCarsRight.push(car2);

car3 = new Object();
car3.x = 200; car3.y = 410; car3.width = cWidth; car3.height = cHeight;
allSprites.push(car3);
allCarsRight.push(car3);

car4 = new Object();
car4.x = 30; car4.y = 410; car4.width = cWidth; car4.height = cHeight;
allSprites.push(car4);
allCarsRight.push(car4);

car5 = new Object();
car5.x = -5; car5.y = 305; car5.width = cWidth; car5.height = cHeight;
allSprites.push(car5); 
allCarsLeft.push(car5); 

car6 = new Object();
car6.x = 300; car6.y = 305; car6.width = 70; car6.height = cHeight;
allSprites.push(car6);
allCarsLeft.push(car6);

car7 = new Object();
car7.x = 190; car7.y = 305; car7.width = 70; car7.height = cHeight;
allSprites.push(car7);
allCarsLeft.push(car7);

car8 = new Object();
car8.x = 40; car8.y = 375; car8.width = cWidth; car8.height = cHeight;
allSprites.push(car8);
allCarsLeft.push(car8);

car9 = new Object();
car9.x = 330; car9.y = 375; car9.width = cWidth; car9.height = cHeight;
allSprites.push(car9);
allCarsLeft.push(car9);

car10 = new Object();
car10.x = 240; car10.y = 375; car10.width = cWidth; car10.height = cHeight;
allSprites.push(car10);
allCarsLeft.push(car10); 

car11 = new Object();
car11.x = 15; car11.y = 445; car11.width = cWidth; car11.height = cHeight;
allSprites.push(car11);
allCarsLeft.push(car11);

car12 = new Object();
car12.x = 300; car12.y = 445; car12.width = cWidth; car12.height = cHeight;
allSprites.push(car12);
allCarsLeft.push(car12);

car13 = new Object();
car13.x = 220; car13.y = 445; car13.width = cWidth; car12.height = 30;
allSprites.push(car13);
allCarsLeft.push(car13); 

lp1 = new Object();
lp1.x = 15; lp1.y = 75; lp1.width = 30; lp1.height = 30; lp1.isSafe = false; 
lilyPads.push(lp1);

lp2 = new Object();
lp2.x = 100; lp2.y = 75; lp2.width = 30; lp2.height = 30; lp2.isSafe = false;
lilyPads.push(lp2);

lp3 = new Object(); 
lp3.x = 185; lp3.y = 75; lp3.width = 30; lp3.height = 30; lp3.isSafe = false; 
lilyPads.push(lp3); 

lp4 = new Object();
lp4.x = 270; lp4.y = 75; lp4.width = 30; lp4.height = 30; lp4.isSafe = false; 
lilyPads.push(lp4);

lp5 = new Object();
lp5.x = 355; lp5.y = 75; lp5.width = 30; lp5.height = 30; lp5.isSafe = false;
lilyPads.push(lp5);

	

//associative array for every item on the board 
//array[0] is the frogger 
//the rest are all the positions, and you loop through each one to 
//figure out if anything collided.

function start_game()
{
	 canvas = document.getElementById('game');
	 if (canvas.getContext) {
	 	ctx = canvas.getContext('2d');
	 }
	 else {
	 	alert ('Your browser does not support canvas.');
	 }
	 intervalId = window.setInterval(draw_game, 30);
	 window.addEventListener('keydown', whatKey, true);  	 
}

function whatKey(event)
{
	oldFrogX = frog.x;
	oldFrogY = frog.x; 

		//Left arrow
	if(event.keyCode == 37) {
		frog.x = frog.x - 25;
		if(frog.x < 0) {
			frog.x = 0; 
		}
	}
		//Right
	else if(event.keyCode == 39) {
		frog.x = frog.x + 25;
		if(frog.x > 375) {
			frog.x = 375;
		}
	}
		//Down
	else if (event.keyCode == 40) {
		frog.y = frog.y + 25;
		if(frog.y > 475) {
			frog.y = 475;
		}
	}
		//Up 
	else if (event.keyCode == 38) { 
		frog.y = frog.y - 25;
		if(frog.y < 65) {
			frog.y = 65;
		}
	}
//	}
}

function draw_game()
{
//    canvas = document.getElementById('game');
	if (canvas.getContext) {
 		ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,canvasX, canvasY); 
		checkCollisions(); 
		render_background(); 
		setPositions();
		checkLilyPads(); 
		renderLilyPads(); 
		render_logs(); 
		render_cars(); 
		render_frog_position(frog.x, frog.y); 
		render_footer(); 
	}
	else {
		alert('Your browser does not support canvas.');
	}
	

}

function setPositions()
{
	setLogs();
	setCars();
}


function start_animation()
{
	setInterval(render_logs, speedLogs); 
}

function add_colors()
{
	canColor = document.getElementById('game');
	ctx = canColor.getContext('2d');
	ctx.fillStyle = "#191970";
	ctx.fillRect(0, 0, 400, 280); 
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 290, 400, 280)
}

function render_background()
{
	add_colors(); 
	//frogger title, lilypads, and roadsides 
	ctx.drawImage(sprite, 0, 0, 350, 50, 0, 0, 350, 50);  
	ctx.drawImage(sprite, 0, 50, 395, 50, 0, 50, 400, 50); 
	ctx.drawImage(sprite, 0, 115, 395, 50, 0, 275, 400, 50); 
	ctx.drawImage(sprite, 0, 115, 395, 50, 0, 475, 400, 50);

	ctx.fillRect(15, 75, 30, 25); 
	ctx.fillRect(100, 75, 30, 25);
	ctx.fillRect(185, 75, 30, 25);
	ctx.fillRect(270, 75, 30, 25);
	ctx.fillRect(355, 75, 30, 25);
}

function render_frog_position(frog_x, frog_y) 
{

	ctx.drawImage(sprite, 0, 360, 45, 30, frog.x, frog.y, 30, 30); 

}

function renderLilyPads()
{
	for(i=0;i<lilyPads.length;i++) {
		if(lilyPads[i].isSafe == true) {
			ctx.drawImage(sprite, 0, 360, 45, 40, lilyPads[i].x, lilyPads[i].y, 30, 30); 
		}
	}
	
}
function checkLilyPads()
{
	for(i=0;i<lilyPads.length;i++) {
 		if(isColliding(allSprites[0],lilyPads[i])) {
 			lilyPads[i].isSafe = true; 
 			frog.x = startX;
 			frog.y = startY; 
 			console.log(numLives); 
 	 	}
 	 }
}
function render_logs() 
{
	row1 = 90; 
	row2 = 125;
	row3 = 165;
	row4 = 205;
	row5 = 240;
	
//rectangles:
//	log
//showing at beginning 
//find out when overlapping happens, track in algorithm 

	ctx.drawImage(sprite, 0, 155, 300, 40, log1.x, row2, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 155, 300, 40, log2.x, row1, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 155, 300, 40, log3.x, row3, boardLogX, boardLogY); 		
	ctx.drawImage(sprite, 0, 155, 300, 40, log4.x, row3, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 190, 250, 36, log5.x, row4, boardLogX, boardLogY);
	ctx.drawImage(sprite, 0, 187, 250, 38, log6.x, row4, 250, 35); 
	ctx.drawImage(sprite, 0, 187, 250, 38, log7.x, row5, 240, 40); 
	ctx.drawImage(sprite, 0, 190, 250, 36, log8.x, row2, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 190, 250, 36, log9.x, row3, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 155, 300, 40, log10.x, row5, boardLogX, boardLogY); 
//hidden at beginning
/*	ctx.drawImage(sprite, 0, 155, 300, 40, -400 + posLog2, row3, boardLogX, boardLogY);
	ctx.drawImage(sprite, 0, 155, 300, 40, -150 + posLog2, row2, boardLogX, boardLogY);
	ctx.drawImage(sprite, 0, 190, 250, 36, -300 + posLog2, row1, boardLogX, boardLogY);
	ctx.drawImage(sprite, 0, 190, 250, 36, -150 + posLog2, row5, boardLogX, boardLogY);
	ctx.drawImage(sprite, 0, 190, 250, 36, -400 + posLog2, row5, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 187, 250, 38, -139 + posLog2, row4, boardLogX, boardLogY);
	ctx.drawImage(sprite, 0, 187, 250, 38, -500 + posLog2, row1, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 187, 250, 38, -300 + posLog2, row4, boardLogX, boardLogY); */ 
}


function render_cars(pos1)
{
	//similar to render_logs
	row1 = 445
	row2 = 410
	row3 = 375
	row4 = 340
	row5 = 305;
	if (level == 1) {
		//more cars in future
		ctx.drawImage(sprite, 40, 260, 40, 40, car1.x, row4, 40, 40); 
	    ctx.drawImage(sprite, 40, 260, 40, 40, car2.x, row4, 40, 40); 
	    ctx.drawImage(sprite, 0, 290, 40, 40, car3.x, row2, 40, 40); 
	    ctx.drawImage(sprite, 0, 290, 40 , 40, car4.x, row2, 40, 40);
	    
	    ctx.drawImage(sprite, 100, 290, 70, 40, car5.x, row5, 60, 40); 
	    ctx.drawImage(sprite, 100, 290, 70, 40, car6.x, row5, 60, 40); 
	    ctx.drawImage(sprite, 100, 290, 70, 40, car7.x, row5, 60, 40);     
	    ctx.drawImage(sprite, 0, 260, 40, 40, car8.x, row3, 40, 40); 
	    ctx.drawImage(sprite, 0, 260, 40, 40, car9.x, row3, 40, 40); 
	    ctx.drawImage(sprite, 0, 260, 40, 40, car10.x, row3, 40, 40); 
	    ctx.drawImage(sprite, 75, 260, 40, 40, car11.x, row1, 40, 40); 
	    ctx.drawImage(sprite, 75, 260, 40, 40, car12.x, row1, 40, 40);
	    ctx.drawImage(sprite, 75, 260, 40, 40, car13.x, row1, 40, 40); 

	}
}

function render_footer()
{
	start = document.getElementById('game');
	ctx = start.getContext('2d');
	ctx.fillStyle = "#33FF00"; 
	//write level
	ctx.font = '18pt Arial';
	currentLevel = "Level " + level; 
	ctx.fillText(currentLevel, 70, 535); 
	//scores
	ctx.font = '12pt Arial';
	currentScore = "Score: " + score; 
	ctx.fillText(currentScore, 0, 560); 
	currentHighScore = "Highscore: " + highScore; 
	ctx.fillText(currentHighScore, 100, 560); 
	//lives
	if (numLives == 3) { 
		ctx.drawImage(sprite, 0, 330, 35, 30, 0, 510, 30, 25); 
		ctx.drawImage(sprite, 0, 330, 35, 30, 15, 510, 30, 25); 
		ctx.drawImage(sprite, 0, 330, 35, 30, 30, 510, 30, 25); 
	}
	if (numLives == 2) {
		ctx.drawImage(sprite, 0, 330, 35, 30, 0, 510, 30, 25);
		ctx.drawImage(sprite, 0, 330, 35, 30, 15, 510, 30, 25);
	}
	if (numLives == 1) {
		ctx.drawImage(sprite, 0, 330, 35, 30, 0, 510, 30, 25); 
	}

}

function checkCollisions()
{
	for(i=11;i<allSprites.length;i++) {
		if(isColliding(allSprites[0], allSprites[i])) {
			allSprites[0].x = startX;
			allSprites[0].y = startY;
			numLives = numLives -1;  
		}
	}
}
function isColliding(object1, object2) 
{
	if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
    object1.y < object2.y + object2.height && object1.y + object1.height > object2.y)
	{
		return true; 
	}
}

function setLogs()
{

	for(i=1;i<allSprites.length;i++) {
		allSprites[i].x += 3;
		if(allSprites[i].x > canvasX) {
			allSprites[i].x = startLeft;
		}
	}
//	console.log(pos);
/*	p1 += 3;
	p2 += 3;
	p3 += 3;
	p4 += 3;
	p5 += 3;
	p6 += 3;
	 
	l1 += 3;
	l2 += 3;
	l3 += 3;
	l4 += 3; 
	l5 += 3;
	l6 += 3;
	if(l1 > canvasX) 
	{
		l1 = 0; //+ 300;
	}	
	if (l2 > canvasX)// - 200) 
	{
		l2 = startLeft;// + 190;
	}
	if (l3 > canvasX )//- 100) 
	{
		l3 = startLeft;// + 200;
	}
	if (l4 > canvasX) 
	{
		l4 = startLeft;// + 375;
	}
	if (l5 > canvasX)// - 200) 
	{
		l5 = startLeft;// + 200;
	}
	if (l6 > canvasX )//- 300) 
	{
		l6 = startLeft;// + 100;
	}
	posLog2 +=3;
	if(posLog2 > canvasX)// +350) 
	{
		posLog2 = startLeft;
	}	*/ 
} 

function setCars()
{
	for (i=0;i<allCarsRight.length;i++) {
		allCarsRight[i].x += 1;
		if(allCarsRight[i].x > canvasX) {
			allCarsRight[i].x = startLeft;
		}
	}
	for (i=0;i<allCarsLeft.length;i++) {
		allCarsLeft[i].x += 1;
		if(allCarsLeft[i].x > canvasX) {
			allCarsLeft[i].x = startLeft;
		}
	}
}
//determine when game board should be re-initialized
function is_new_round(time, numSafeFrogs)
{
	if (time == 0) {
		return true;
	}
	if (numSafeFrogs == 5) {
		return true;
	}	
	else {
		return false;
	}
}

function is_game_over(lives)
{
	if (lives == 0); {
		return true;
	}
	
	return false; 
}