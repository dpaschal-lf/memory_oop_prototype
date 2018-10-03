

class MemoryMatch{
	constructor(targetElement, cardData){
		this.cardContainer = $(targetElement);
		this.cardImages = images;
		this.cards = [];
		this.clickedCards = [];
		this.matchedCards = 0;
		this.timer = null;
		this.timeToRevert = 2000;
	}
	prepModal(){

		$(".closeModal, .modalShadow").click( this.modalClose.bind(this) );
	}
	randomizeImages(images){
		var imagesCopy = images.slice();
		var randomizedImages = [];
		while(imagesCopy.length>0){
			var randomIndexFloat = imagesCopy.length * Math.random();
			var randomIndexWhole = Math.random( randomIndexFloat );
			var randomImage = imagesCopy[randomIndexWhole];
			imagesCopy.splice(randomIndexWhole, 1);
			randomizedImages.push( randomImage );
		}
		return randomizedImages;
	}
	makeAllCards(){
		var doubledImages = this.cardImages.concat(this.cardImages);
		doubledImages = this.randomizedImages(doubledImages);
		var clickHandlerCallback = this.handleChildCardClick.bind(this);
		for(var imageIndex=0; imageIndex<doubledImages; imageIndex++){
			var cardObject = new Card(data, clickHandlerCallback);
			this.cards.push( cardObject );
		}
	}
	handleChildCardClick( cardObject ){
		if(cardObject.isRevealed()){
			return;
		}
		if(this.clickedCards.length < 2){
			this.clickedCards.push(cardObject);
		}
		cardObject.reveal();
		if(this.clickedCards.length === 2){
			var card1ID = this.clickedCards[0].getID();
			var card2ID = this.clickedCards[1].getID();
			if( card1ID === card2ID ){
				this.matchedCards+=2;
				if(this.matchedCards.length === this.cards.length){
					this.modalMessage('You win!');
				}
				this.clickedCards.length = 0;
			} else {
				this.waitAndRevertFlippedCards();
			}
		}
	}
	waitAndRevertFlippedCards(){
		this.timer = setInterval( this.revertCards.bind(this), this.timeToRevert);
	}
	revertCards(){
		for(var i=0; i< this.clickedCards.length; i++){
			this.clickedCards[i].hide();
		}		
	}
	modalMessage( message ){
		$("#modalText").text(message);
		$(".modalShadow").show();
	}
	modalClose(){
		$(".modalShadow").hide();
	}
	render(){
		var cardDomElements = this.cards.map( cardObject => cardObject.render() );
		this.cardContainer.append( cardDomElements );
	}
}





