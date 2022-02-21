// Foundations PROJECT: ETCH-A-SKETCH
// Linked to the index.html page

// VARIABLES
let divsNum = 16*16; // initialize & assign the number of divs, which will be changed later (dynamic)
let divsWidth = 960/16; // trying to get this into the JS

// "16x16 grid of square divs. Create the divs using JS.
// loop to do all the repitition of div creation
for (let i = 0; i < divsNum ; i++) {
  const container1 = document.getElementById("sketchArea");
  const manyDivs = document.createElement('div');
  manyDivs.border = "1px"; 
  manyDivs.className = "sketchDiv"; // "sketchDiv" class for CSS
  manyDivs.style.width = "60px";
  manyDivs.style.height = "60px";
  sketchArea.appendChild(manyDivs); //
}


// Event Listner for all the divs:
// Create an array from the nodelist of divs on the HTML page:
const sketchDivs = Array.from(document.querySelectorAll('.sketchDiv')); 
// Add the E.L. to each div so we know when each is hovered over:
sketchDivs.forEach(square => square.addEventListener('mouseover', colorFxn)); 

function colorFxn() {
  const container1 = document.querySelector('#rpsResults'); // selects the target element of the DOM (where we want to manipulate)

  console.log("the colorFxn is firing");

}


// Put the current date in the game somewhere:
// let sketchDate = new Date().getFullYear();
// console.log(sketchDate);