

class Card{
	constructor( cardData, backFace, clickCallback ){
		this.revealed = false; 
		this.domElements = {
			card: null,
			front: null,
			back: null
		}
		this.backFace = backFace;
		this.data = cardData;
		this.parentClickHandler = clickCallback;
	}
	isRevealed(){ //return whether or not the card is revealed

	}
	handleClick(){ //call the click handler that came from the parent

	}
	reveal(){ //hide the back dom element and set revealed to true

	}
	hide(){ //hide the front dom element and set revealed to false

	}
	getID(){ //return the front image data we got from the parent

	}
	render(){ //render out the dom element and return it
		/*
		<div class="card">
			<div class="front"></div>
			<div class="back"></div>
		</div>
		*/
		//store each part into the domElements property, 
		//take the front image from the data and use it as a background image of the front element
		//take the backFace property and use it as a background image of the back element
	}
}