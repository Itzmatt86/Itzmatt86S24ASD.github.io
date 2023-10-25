$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, 270, 50); //right (bottom)
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    
    createPlatform(200,700,1400,5)
    // createPlatform(300,700,60,5)
    // createPlatform(400,700,20,5)
    // createPlatform(500,700,20,5)
    // createPlatform(600,700,20,5)
    // createPlatform(700,700,20,5)
    // createPlatform(800,700,20,5)
    // createPlatform(900,700,20,5)
    // createPlatform(1000,700,20,5)
    // createPlatform(1100,700,20,5)
    // createPlatform(1200,700,20,5)
    // createPlatform(1300,700,20,5) 
    
    createPlatform(250,600,20,5)
    createPlatform(350,600,20,5)
    createPlatform(450,600,20,5)
    createPlatform(550,600,20,5)
    createPlatform(650,600,20,5)
    createPlatform(750,600,20,5)
    createPlatform(850,600,20,5)
    createPlatform(950,600,20,5)
    createPlatform(1050,600,20,5)
    createPlatform(1150,600,20,5)
    createPlatform(1250,600,20,5)
    

    createPlatform(200,500,20,5)
    createPlatform(300,500,20,5)
    createPlatform(400,500,20,5)
    createPlatform(500,500,20,5)
    createPlatform(600,500,20,5)
    createPlatform(700,500,20,5)
    createPlatform(800,500,20,5)
    createPlatform(900,500,20,5)
    createPlatform(1000,500,20,5)
    createPlatform(1100,500,20,5)
    createPlatform(1200,500,20,5)
    createPlatform(1300,500,20,5)
    
    createPlatform(250,400,20,5)
    createPlatform(350,400,20,5)
    createPlatform(450,400,20,5)
    createPlatform(550,400,20,5)
    createPlatform(650,400,20,5)
    createPlatform(750,400,20,5)
    createPlatform(850,400,20,5)
    createPlatform(950,400,20,5)
    createPlatform(1050,400,20,5)
    createPlatform(1150,400,20,5)
    createPlatform(1250,400,20,5)
    

    createPlatform(200,300,20,5)
    createPlatform(300,300,20,5)
    createPlatform(400,300,20,5)
    createPlatform(500,300,20,5)
    createPlatform(600,300,20,5)
    createPlatform(700,300,20,5)
    createPlatform(800,300,20,5)
    createPlatform(900,300,20,5)
    createPlatform(1000,300,20,5)
    createPlatform(1100,300,20,5)
    createPlatform(1200,300,20,5)
    createPlatform(1300,300,20,5)
    
    createPlatform(250,200,20,5)
    createPlatform(350,200,20,5)
    createPlatform(450,200,20,5)
    createPlatform(550,200,20,5)
    createPlatform(650,200,20,5)
    createPlatform(750,200,20,5)
    createPlatform(850,200,20,5)
    createPlatform(950,200,20,5)
    createPlatform(1050,200,20,5)
    createPlatform(1150,200,20,5)
    createPlatform(1250,200,20,5)

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)


    createCollectable("database", 240, 100, 1, 1);
    createCollectable("database", 1240, 100, 1, 1);
    
    createCollectable("database", 590, 200, 1, 1);
    createCollectable("database", 890, 200, 1, 1);
    
    createCollectable("database", 240, 300, 1, 1);
    createCollectable("database", 1240, 300, 1, 1);
    //
    createCollectable("database", 590, 400, 1, 1);
    createCollectable("database", 890, 400, 1, 1);
    
    createCollectable("database", 240, 500, 1, 1);
    createCollectable("database", 1240, 500, 1, 1);
    
    createCollectable("database", 590, 600, 1, 1);
    createCollectable("database", 890, 600, 1, 1);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left", 100, 3000);
    createCannon("left", 300, 4000);
    createCannon("left", 500, 5000);
    
    createCannon("right", 510, 5000);
    createCannon("right", 310, 4000);
    //createCannon("right", 710, 3000);
    
    createCannon("top", 270, 3000);
    //createCannon("top", 370, 3100);
    createCannon("top", 470, 3200);
    //createCannon("top", 570, 3300);
    createCannon("top", 670, 3400);
    //createCannon("top", 770, 3500);
    createCannon("top", 870, 3600);
    //createCannon("top", 970, 3700);
    createCannon("top", 1070, 3800);
    //createCannon("top", 1170, 3900);
    createCannon("top", 1270, 4000);
    //createCannon("top", 1370, 4100);

    //createCannon("bottom", 200, 4100);
    createCannon("bottom", 300, 4000);
    //createCannon("bottom", 400, 3900);
    createCannon("bottom", 500, 3800);
    //createCannon("bottom", 600, 3700);
    createCannon("bottom", 700, 3600);
    //createCannon("bottom", 800, 3500);
    createCannon("bottom", 900, 3400);
    //createCannon("bottom", 1000, 3300);
    createCannon("bottom", 1100, 3200);
    //createCannon("bottom", 1200, 3100);
    


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }


  registerSetup(setup);
});
