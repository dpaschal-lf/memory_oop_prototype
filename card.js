

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
	isRevealed(){
		return this.revealed;
	}
	handleClick(){

	}
	reveal(){

	}
	hide(){

	}
	getID(){

	}
	render(){
			/*
		<div class="card">
			<div class="front"></div>
			<div class="back"></div>
		</div>
		*/
	}
}