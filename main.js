// ---------------------------
// Validate form
// ---------------------------
// How much would it cost for your name to be converted to a sign
// Each letter and special characters cost 5 dollars, you should be
// taxed on the product and not shipping, shipping comes in 3 flavors,
// and you get a small choice of different fonts ( no extra charge ).
//
// Take everything you have learned form the past examples to execute the app.
// Caching all DOM Input Elements necessary
var nameInput = document.querySelector('[name="name"]');
var fontInput = document.querySelector('[name="font-select"]');
var specialCharsInput = document.querySelector('[name="specialChars"]');
var shippingInput = document.querySelector('[name="shipping"]');
// Cache all DOM Display Elements here
var nameDisplay = document.querySelector('#name');
let letterscostdisplay = document.getElementById('lettersCostDisplay');
let specialcharcostdisplay = document.getElementById('specialCharsCostDisplay');
let taxcostdisplay = document.getElementById('taxCostDisplay');
let shippingcostdisplay = document.getElementById('shippingCostDisplay');
let subtotaldisplay = document.getElementById('subTotalDisplay');
let grandtotaldisplay = document.getElementById('grandTotalDisplay');
// Business logic
var costPerLetter = 5;
var tax = .06;
nameInput.addEventListener('input', function(e) {
 // if the user has entered a value in the nameInput, then display it
 // if not, then display 'Your Name Here'
 if (e.target.value) {
   nameDisplay.innerHTML = e.target.value;
 } else {
   nameDisplay.innerHTML = 'Your Name Here';
 }
});
// Listening to the fontInput drop down for a change.
// when it changes, change the font family style of the name display
fontInput.addEventListener('change', function(e) {
 nameDisplay.style.fontFamily = e.target.value;
});
function calculateCosts(e) {
 e.preventDefault();
 // do all your business logic here
    
 let name = nameInput.value;
 let lettersCost = name.length * costPerLetter;
 lettersCostDisplay.innerText = lettersCost;
    
 let specialChars = parseInt(specialCharsInput.value);
 let specialCharsCost = specialChars * costPerLetter;
 specialCharsCostDisplay.innerText = specialCharsCost;
 let subTotal = lettersCost + specialCharsCost;
    
 subTotalDisplay.innerText = subTotal;
 let taxCost = subTotal * tax;
 taxCostDisplay.innerText = taxCost;
    
 let shippingCost = parseInt(shippingInput.value);
 shippingCostDisplay.innerText = shippingCost;
    
 let grandTotal = subTotal + taxCost + shippingCost;
 grandTotalDisplay.innerText = grandTotal;
};

document.getElementById("calculate").addEventListener('click', calculateCosts);