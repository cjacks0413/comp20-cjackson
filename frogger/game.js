//get sprite image 
sprite = new Image();
sprite.src = "assets/frogger_sprites.png"; 

//global variables
frog_x = 0;
frog_y = 0; 
numLives = 3; 
level = 1; 
score = 0; 
highScore = 0;
numSafeFrogs = 0; 
time = 120; 
speedLogs = 500; 
speedCars = 500; 

//re-call whenever there is a new round or the game is over
function start_game()
{
	 draw_game(); 	 
}
//re-call constantly whenever user input/moves change
function draw_game()
{
    canvas = document.getElementById('game');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		render_background(); 
		//determine user move, adjust coordinates accordingly--starting position:
			frog_x = 200;
			frog_y = 475; 
		render_frog_position(frog_x, frog_y); 
		render_logs(); 
		render_cars(); 
		render_footer(); 
	//render lilypads
	}
	else {
		alert('Your browser does not support canvas.');
	}
	
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

}

function render_frog_position(frog_x, frog_y) 
{

	ctx.drawImage(sprite, 0, 360, 45, 30, frog_x, frog_y, 30, 40); 

}


function render_logs() 
{
	//changes setup according to level
	//depends on how many levels--there can be a case for each range 
	//of levels or a different case for every level
	if (level == 1) {
			//more logs in future
			ctx.drawImage(sprite, 0, 155, 300, 40, 40, 150, 250, 50); 
			//set speed: 
			//setInterval(move_logs, speedLogs);
	}		
	
	//if (level == 2)...

}

function render_cars()
{
	//similar to render_logs
	
	if (level == 1) {
		//more cars in future
		ctx.drawImage(sprite, 40, 260, 40, 40, 30, 350, 40, 40); 
	    ctx.drawImage(sprite, 100, 290, 70, 40, 190, 410, 60, 40); 
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