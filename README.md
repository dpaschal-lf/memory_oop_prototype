# memory match

- You're going to fill out the card object, once you do so, the game will function
- look at the constructor and see what properties you have access to

### feature set 1
- build out the render function
- use the commented out HTML as your guide to how the element should look
- add the background image to the front from the data.image property of the object
- add the background image to the back from the backFace property of the object
- add the click handler to the card dom element.  make sure to bind it
- test to make sure the cards all show up

### feature set 2
- add code to the handleClick method to call the parentClickHandler method.  Don't forget to pass in the current object, via this, to the parent
- add code to the isRevealed method, simply return the property revealed from the object
- run the page and see if the console.log happens

### feature set 3
- add the hide and show method code.  Find the card's back face in the domElements property and use jquery hide or show on it, respectively
- add the getID code.  Return the front image that comes from the data property of the card
