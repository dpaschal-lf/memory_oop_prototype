var cardData = [];

var app;

function startApp(){
	app = new MemoryMatch( "#gameArea", cardData );
	app.render();
	app.startGame();
}