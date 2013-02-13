//get sprite image 
sprite = new Image();
sprite.src = "assets/frogger_sprites.png"; 


//if round is over...
//call start game 

function start_game()
{
    canvas = document.getElementById('game');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		numLives = 3; 
		render_frame(); 
		level = check_level(); 
		render_logs(level); 
		render_cars(level); 
	//render text based on level and other things
		render_changes(level,numLives); 
	//render lilypads??  
	}
	//else statement if browser doesn't support
	
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

function render_frame()
{
	add_colors(); 
	//frogger title, lilypads, and sidewalks
	ctx.drawImage(sprite, 0, 0, 350, 50, 0, 0, 350, 50); 
	ctx.drawImage(sprite, 0, 50, 395, 50, 0, 50, 400, 50); 
	ctx.drawImage(sprite, 0, 115, 395, 50, 0, 275, 400, 50); 
	ctx.drawImage(sprite, 0, 115, 395, 50, 0, 475, 400, 50);
	//starting frog position 
	ctx.drawImage(sprite, 0, 360, 45, 30, 200, 475, 30, 40); 

}

function check_level()
{
	return 1; 
}

function render_logs(level) 
{
	//changes setup according to level
	//depends on how many levels--there can be a case for each range 
	//of levels or a different case for every level
	if (level == 1) {
			//more logs in future
			ctx.drawImage(sprite, 0, 155, 300, 40, 40, 150, 250, 50); 
			//set speed
	}		
	
	//if (level == 2)...

}

function render_cars(level)
{
	//similar to render_logs
	
	if (level == 1) {
		//more cars in future
		ctx.drawImage(sprite, 40, 260, 40, 40, 30, 350, 40, 40); 
	    ctx.drawImage(sprite, 100, 290, 70, 40, 190, 410, 60, 40); 
	    //set speed 
	}
}

function render_changes(level, numLives)
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
	currentScore = "Score: " + getScore(); 
	ctx.fillText(currentScore, 0, 560); 
	currentHighScore = "Highscore: " + getHighScore(); 
	ctx.fillText(currentHighScore, 75, 560); 
	//lives...how to make this efficient? 
	ctx.drawImage(sprite, 0, 330, 35, 30, 0, 510, 30, 25); 
	ctx.drawImage(sprite, 0, 330, 35, 30, 20, 510, 30, 25); 
	//time bar
	

}
//how to get/keep track of this?
function getHighScore() 
{
	return 0; 
}
//how to get/keep track of this? 
function getScore()
{
	return 0; 
}

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