var gameStart = new Image();
gameStart.onload = function() { draw_board(); };
gameStart.src = "assets/frogger_sprites.png"; 

function draw_board()
{
	add_colors();

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
<!-- always stay the same -->
	ctx.drawImage(gameStart, 0, 0, 350, 50, 0, 0, 350, 50); 
	ctx.drawImage(gameStart, 0, 50, 395, 50, 0, 50, 400, 50); 
	ctx.drawImage(gameStart, 0, 115, 395, 50, 0, 275, 400, 50); 
	ctx.drawImage(gameStart, 0, 115, 395, 50, 0, 475, 400, 50); 
<!-- abstract out logs/cars/frog starting position --> 
	ctx.drawImage(gameStart, 0, 155, 300, 40, 40, 150, 250, 50); 
	ctx.drawImage(gameStart, 40, 260, 40, 40, 30, 350, 40, 40); 
	ctx.drawImage(gameStart, 100, 290, 70, 40, 190, 410, 60, 40); 
	ctx.drawImage(gameStart, 0, 360, 45, 30, 200, 475, 30, 40); 
	
	start_status();
}

function add_colors()
{
	var canColor = document.getElementById('game');
	var ctx2 = canColor.getContext('2d');
	ctx2.fillStyle = "#191970";
	ctx2.fillRect(0, 0, 400, 280); 
	ctx2.fillStyle = "#000000";
	ctx2.fillRect(0, 290, 400, 280)
}

function start_status()
{
	var start = document.getElementById('game');
	var ctx3 = start.getContext('2d');
	ctx3.fillStyle = "#33FF00"; 
	ctx3.font = '18pt Arial';
<!-- abstract out which level, how many lives, score, and Highscore --> 
	ctx3.fillText("Level 1", 60, 535); 
	ctx3.font = '12pt Arial';
	ctx3.fillText("Score: 0", 0, 560); 
	ctx3.fillText("Highscore: 0", 75, 560); 
	ctx3.drawImage(gameStart, 0, 330, 35, 30, 0, 510, 30, 25); 
	ctx3.drawImage(gameStart, 0, 330, 35, 30, 20, 510, 30, 25); 
	

}