// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter();
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter() {
  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[row].length; col++) {
      let rgbString = image[row][col];
      let rgbNumbers = rgbStringToArray(rgbString);
      rgbNumbers[RED] = 255;
      rgbString = rgbArrayToString(rgbNumbers);
      image[row][col] = rgbString;
}
}
}

// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function
function keepInBounds(boundNum) {
  return Math.min(255, Math.max(0, boundNum));
}


// TODO 3: Create reddify function
function reddify(rgbArray) {
  rgbArray[RED] = 200;
}

// TODO 6: Create more filter functions


// CHALLENGE code goes below here
