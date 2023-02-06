

function setup() {
	createCanvas(600, 600);

	game = new Game();
	game.nextLevel();

	windowResized();
}

function draw() {
	background(0);

	game.draw();
}

function windowResized() {
	resizeCanvas(600, 600);
	game.unit = width / 100;
	game.windowResized();
}

function mousePressed() {
	game.mousePressed();
}

function mouseReleased() {
	game.mouseReleased();
}