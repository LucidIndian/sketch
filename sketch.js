// Foundations PROJECT: ETCH-A-SKETCH - Linked to the index.html page

// VARIABLES
let divsNum = 16*16; // initialize & assign the number of divs, which will be changed later (dynamic)
let divsWidth = 960/16; // trying to get this into the JS
let divswidthPX = divsWidth+"px"; // adding px to a integer at some point

//FUNCTION: createDivs
// "16x16 grid of square divs. Create the divs using JS.
function createDivs () {
  for (let i = 0; i < divsNum ; i++) { // loop to do all the repitition of div creation
    const container1 = document.getElementById("sketchArea");
    const manyDivs = document.createElement('div');
    manyDivs.border = "1px"; 
    manyDivs.className = "sketchDiv"; // "sketchDiv" class for CSS
    manyDivs.style.width = divswidthPX; // it's coming into here with the "" already
    manyDivs.style.height = divswidthPX; // it's coming into here with the "" already
    sketchArea.appendChild(manyDivs); //
  }
  // Add an eventListner to all the newly created divs:
  // 1. Create an array from the nodelist of divs on the HTML page:
  const sketchDivs = Array.from(document.querySelectorAll('.sketchDiv')); 
  // 2. Add the E.L. to each div so we know when each is hovered over:
  sketchDivs.forEach(square => square.addEventListener('mouseover', function( e ) {
    e.target.style.backgroundColor = "green";
  }));

} //end of createDivs fxn
createDivs (); //first time it's called, with defaults set in "VARIABLES"


// Event Listener for the button
const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', function() {
  let userInput = prompt("Please enter number up to 100");
  
  if (userInput > 100) {
    alert ("Enter a smaller number");
    return
  } else if (Number.isInteger(userInput) ) {  // true if not a number?
    alert ("enter a number");
    return
  } else {
    divsNum = userInput*userInput; //Change divsNum to user-inputted, limit of 100
    divsWidth = 960/userInput; //Change divsWidth 
    divswidthPX = divsWidth+"px"; //Add the px for the styling in the createDivs fxn. 
  
    let elementtoDelete = document.getElementById("sketchArea");
    while (elementtoDelete.firstChild) {
      elementtoDelete.removeChild(elementtoDelete.firstChild);
    }

    createDivs(divsNum, divswidthPX);
  }
  
  });



// Put the current date in the game somewhere:
// let sketchDate = new Date().getFullYear();
// console.log(sketchDate);
