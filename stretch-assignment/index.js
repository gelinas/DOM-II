/*
Rockets:
  * When a block is clicked, it should go to the top of the stack.

*/

const counterMaker = (interval) => {
    let count = 0;
    function counter() {
      count = count + interval;
      return count;
    }
    return counter
};

const rocketCount = counterMaker(-1);

let blocks = document.querySelectorAll(".block")


blocks.forEach(block => {
    block.style.transition = "order 3s";
    block.addEventListener('mousedown', (event) => {
        block.style.order = rocketCount();
    });
});


/*
 Travelers:
  * While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).
*/

blocks.forEach(block => {
    let holdDown = false;
    block.style.left = "0px";
    

    function travelRight(block) { //Updates the position every 200 ms
        //setInterval(travelRight(block), 200);
        blockPos = parseInt(block.style.left);
        if (holdDown === true) {
            blockPos = blockPos + 10;
            block.style.position = "relative";
            block.style.left = blockPos + 'px';
        }
    }
    block.addEventListener('mousedown', (event) => {
        holdDown = true;
        var id = setInterval(function () {
            travelRight(block);
        }, 200);
        travelRight(block);

        block.addEventListener('mouseout', (event) => {
            holdDown = false;
            clearInterval(id);
        });
        block.addEventListener('mouseup', (event) => {
            holdDown = false;
            clearInterval(id);
        });
    });
});

/*
function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
*/



/*
const travelerCount = counterMaker(10);

blocks.forEach(block => {
    block.addEventListener('mousedown', (event) => {
        block.style.position = "relative";
        block.style.left = `${travelerCount()}px`;
    });
});
*/

/*
## Stretch Goals
  
  Rockets:
    
  * Animate the rockets, visually show them being transported to the top.
  
  Travelers:
    
  * Give the travelers a limit on the distance it can travel.
  * When the mouse button is released, it should travel back to its original position.
  * A mouse down that occurs during a transition back to the original position should send it traveling to the right again  from it's current position.
  
  You will be using `window.setInterval`. For this method, and any of those listed in the "Topics" section of this README, you are encouraged to use MDN as your resource for Documentation. MDN can be challenging to consume at first, so you may also use something like W3schools if the MDN documentation on a given subject is a bit too complicated.
*/