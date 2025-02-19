/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    W: 87,
    D: 68,
    S: 83,
  };

  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
  };

  var runner = {
    x: 440,
    y: 440,
    speedX: 0,
    speedY: 0,
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function newFrame() {
  repositionGameItem();
  wallCollision();
  redrawGameItem();
  checkCollision();
}

  function handleKeyDown(event) {
    //Controls for Walker
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
    }
    if (event.which === KEY.UP) {
      walker.speedY = -5;
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 5;
    }
    //Controls for Runner
    if (event.which === KEY.A) {
      runner.speedX = -5;
    }
    if (event.which === KEY.W) {
      runner.speedY = -5;
    }
    if (event.which === KEY.D) {
      runner.speedX = 5;
    }
    if (event.which === KEY.S) {
      runner.speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.UP || event.which === KEY.RIGHT || event.which === KEY.DOWN) {
      walker.speedX = 0;
      walker.speedY = 0;
    }
    if (event.which === KEY.A || event.which === KEY.W || event.which === KEY.D || event.which === KEY.S) {
      runner.speedX = 0;
      runner.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    walker.x += walker.speedX;
    walker.y += walker.speedY;
    runner.x += runner.speedX;
    runner.y += runner.speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
    $("#runner").css("left", runner.x);
    $("#runner").css("top", runner.y);
  }

  function wallCollision() {
    var char1H = $("#walker").height() 
    var char1W = $("#walker").width() 
    var boardWidth = $("#board").width() - char1W 
    var boardHeight = $("#board").height() - char1H

    var char2H = $("#runner").height() 
    var char2W = $("#runner").width() 
    var boardWidth2 = $("#board").width() - char2W 
    var boardHeight2 = $("#board").height() - char2H

    if (walker.x < 0) {
      walker.x = 0;
    }
    if (walker.x > boardWidth) {
      walker.x = boardWidth;
    }
    if (walker.y < 0) {
      walker.y = 0;
    }
    if (walker.y > boardHeight) {
      walker.y = boardHeight;
    }
    if (runner.x < 0) {
      runner.x = 0;
    }
    if (runner.x > boardWidth2) {
      runner.x = boardWidth2;
    }
    if (runner.y < 0) {
      runner.y = 0;
    }
    if (runner.y > boardHeight2) {
      runner.y = boardHeight2;
    }
  }

function checkCollision() {
  var walkerWidth = $("#walker").width();
  var walkerHeight = $("#walker").height();
  var runnerWidth = $("#runner").width();
  var runnerHeight = $("#runner").height();

  if (walker.x < runner.x + runnerWidth &&
      walker.x + walkerWidth > runner.x &&
      walker.y < runner.y + runnerHeight &&
      walker.y + walkerHeight > runner.y) {
    // Collision detected, reset positions
    resetPositions();
  }
}

function resetPositions() {
  // Reset walker to top left
  walker.x = 0;
  walker.y = 0;

  // Reset runner to bottom right
  var boardWidth = $("#board").width();
  var boardHeight = $("#board").height();
  var runnerWidth = $("#runner").width();
  var runnerHeight = $("#runner").height();
  runner.x = boardWidth - runnerWidth;
  runner.y = boardHeight - runnerHeight;
}

}