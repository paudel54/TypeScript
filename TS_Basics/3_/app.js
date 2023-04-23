"use strict";
//the only question here is how does the TS knows that button had methods like addEventListenrs??
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('Clicked');
});
// if lib is not set some defaault setitng would be applied. 
