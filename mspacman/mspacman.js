mspacman = new Image();
mspacman.src = "pacman10-hp-sprite.png";

function render_game()
{
	canvas = document.getElementById('mspacman'); 
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		ctx.drawImage(mspacman, 320, 0, 465, 135, 0, 0, 500, 300); 
		ctx.drawImage(mspacman, 40, 160, 20, 20, 50, 210, 30, 30); 
	}
	else {
		alert('Sorry, canvas is not supported in your browser!'); 
	}
}