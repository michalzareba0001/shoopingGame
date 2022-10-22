const gameboard = document.getElementById('gameboard');
const gameboardWidth = gameboard.offsetWidth;
const gameboardHeight = gameboard.offsetHeight;
const headerHeight = document.querySelector('header').offsetHeight;
const footerHeight = document.querySelector('footer').offsetHeight;
const gameboardBottom = gameboardHeight + headerHeight;

const cart = document.getElementById('cart');
const cartWidth = cart.offsetWidth;
const cartHeight = cart.offsetHeight;









console.log(gameboardWidth, gameboardHeight);

//constructors

;
cart.style.top = gameboardBottom - cartHeight + 'px';
cart.style.left = (gameboardWidth/2) - (cartWidth/2) + 'px';
console.log(cartWidth, cartHeight);





//mouse movement
document.addEventListener('mousemove', function(e) {
    cart.style.left = e.clientX - (cart.width/2) + 'px';});

