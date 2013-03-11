//get sprite image 
sprite = new Image();
sprite.src = "assets/frogger_sprites.png"; 

//global variables
frogX = 200;
frogY = 475; 
oldFrogX = 0;
oldFrogY = 0; 
numLives = 3; 
level = 1; 
score = 0; 
highScore = 0;
numSafeFrogs = 0; 
time = 120; 
speedLogs = 60; 
speedCars = 500; 
startLeft = -160
//interval = 60; 
canvasX = 399;
canvasY = 565; 
//log variables
medLogX = 155;
medLogY = 300; 
boardLogX = 250; 
boardLogY = 40;
posLogX = 40; 
posLogY = 160;
pos1 = 40; 

//allSprites = new Array();

function start_game()
{
	 canvas = document.getElementById('game');
	 if (canvas.getContext) {
	 	ctx = canvas.getContext('2d');
	 }
	 else {
	 	alert ('Your browser does not support canvas.');
	 }
	 setInterval(draw_game, 30);
	 window.addEventListener('keydown', whatKey, true);  	 
}

function whatKey(event)
{
	oldFrogX = frogX;
	oldFrogY = frogY; 
	
//	switch (event.keyCode) {
		//Left arrow
	if(event.keyCode == 37) {
		frogX = frogX - 15;
		if(frogX < 0) {
			frogX = 0; 
		}
	}
		//Right
	else if(event.keyCode == 39) {
		frogX = frogX + 15;
		if(frogX > 375) {
			frogX = 375;
		}
	}
		//Down
	else if (event.keyCode == 40) {
		frogY = frogY + 15;
		if(frogY > 475) {
			frogY = 475;
		}
	}
		//Up 
	else if (event.keyCode == 38) { 
		frogY = frogY - 15;
		if(frogY < 65) {
			frogY = 65;
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
		render_background(); 
		//determine user move, adjust coordinates accordingly--starting position:
	//		frog_x = 200;
	//		frog_y = 475; 
//		setPositions(); 
		pos1 += 3; 
//		pos2 += 3;
//		pos3 += 3; 
		render_frog_position(frogX, frogY); 
		render_logs(pos1); //(pos1, pos2, pos3) etc.  
		render_cars(pos1); 
		render_footer(); 
	//render lilypads
	}
	else {
		alert('Your browser does not support canvas.');
	}
	

}
/*
function setPositions()
{
	log
}*/ 
/*
function start_animation()
{
	setInterval(render_logs, speedLogs); 
}*/ 
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

}

function render_frog_position(frog_x, frog_y) 
{
	if((pos1 > canvasX)){ // || (pos2 > canvasX) || (pos3 > canvasX)) 
		 pos1 = startLeft;
//		 pos2 = startLeft;
//		 pos3 = startLeft;
		 } 
	ctx.drawImage(sprite, 0, 360, 45, 30, frogX, frogY, 30, 40); 

}

function render_logs() 
{
	row1 = 90; 
	row2 = 125;
	row3 = 165;
	row4 = 205;
	row5 = 240;
	ctx.drawImage(sprite, 0, 155, 300, 40, pos1, row2, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 155, 300, 40, 180, row1, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 155, 300, 40, 150, row3, boardLogX, boardLogY); 	
	ctx.drawImage(sprite, 0, 155, 300, 40, -100, row3, boardLogX, boardLogY); 
	ctx.drawImage(sprite, 0, 190, 250, 36, pos1, row4, boardLogX, boardLogY);
	ctx.drawImage(sprite, 0, 187, 250, 38, 200, row4, 250, 35); 
	ctx.drawImage(sprite, 0, 187, 250, 38, 150, row5, 240, 40); 
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
		ctx.drawImage(sprite, 40, 260, 40, 40, pos1, row4, 40, 40); 
	    ctx.drawImage(sprite, 40, 260, 40, 40, 210, row4, 40, 40); 
	    ctx.drawImage(sprite, 100, 290, 70, 40, -5, row5, 60, 40); 
	    ctx.drawImage(sprite, 100, 290, 70, 40, 300, row5, 60, 40); 
	    ctx.drawImage(sprite, 100, 290, 70, 40, 190, row5, 60, 40); 
	    ctx.drawImage(sprite, 0, 260, 40, 40, pos1, row3, 40, 40); 
	    ctx.drawImage(sprite, 0, 260, 40, 40, 330, row3, 40, 40); 
	    ctx.drawImage(sprite, 0, 260, 40, 40, 240, row3, 40, 40); 
	    ctx.drawImage(sprite, 0, 290, 40 , 40, 200, row2, 40, 40); 
	    ctx.drawImage(sprite, 75, 260, 40, 40, 15, row1, 40, 40); 
	    ctx.drawImage(sprite, 75, 260, 40, 40, 300, row1, 40, 40);
	    ctx.drawImage(sprite, 75, 260, 40, 40, 220, row1, 40, 40); 
	    //set speed: 
	    //setInterval(move_cars, speedCars); 
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