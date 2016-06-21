/**
 *  Console.frog. A better way to log!
 *    - Logs a frog, saying your log... Yep!
 *
 *  MIT licensed
 *  Copyright (C) 2016 Tim Holman, http://tholman.com
 */

(function dothething() {

  if( !window.console ) {
    // Well... nothing really... let it be!
    return;
  }
  
  var rainbowStyles = "background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );" + 
  "background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );" + 
  "color:transparent;" +
  "-webkit-background-clip: text;" +
  "background-clip: text;";

  window.console.rainbowfrog = function() {

    var i;
    
    // This looks like a frog, right?
    // Taken from here - http://chris.com/ascii/index.php?art=animals/frogs
    var frog = [[""],
                ["         _,-.  "],
                [" ,-. ,--'  o ) "],
                [" \\(,' '  ,,-' "],
                [",-.\\-.__,\\\\_"],
                ["\\(`--'    `\\ "],
                [""]];

    // Gets args as a string
    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.join(' ');

    // Add the bubble if there is something to log!
    if( stringOfArgs.length > 0 ) {  
      frog[1] = frog[1] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
      frog[2] = frog[2] + "-(   " + stringOfArgs + "   )";
      frog[3] = frog[3] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
    }

    // Log the frog!
    for( i = 0; i < frog.length; i++ ) {
      
      console.log("%c" + frog[i] + "\n", rainbowStyles);
    }
  }

  // console.log(console.frog);
})();
