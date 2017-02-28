// get Frame canvas
var canvasFrame = document.getElementById('canvasGameFrame');
var contextFrame = canvasFrame.getContext('2d');
var startgame = false;
var score = 0;
var x, y;
canvasFrame.addEventListener("click", StartGame);

function StartGame() {

  if (startgame === false){
    startgame = true;
    contextFrame.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
    document.getElementById("score").innerHTML = score;
    CreateBox();

    setTimeout(function(){
      startgame = false;
      timeout = true;
      alert("Game is over. Your score is "+ score +"! Press to the box start again");
      score = 0;
      timeleft = 10;
    }, 10000);
  } else
  {
    ClickOnRectangle();
  }
}

// get random number for x
function getRandomX(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// get random number for y
function getRandomY(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// get mous position
function getMousePos(canvasFrame, evt)
{
  var rect = canvasFrame.getBoundingClientRect();

  return{
    mouse_x: evt.clientX - rect.left,
    mouse_y: evt.clientY - rect.top
  }
}

function CreateBox() {
  if (startgame === true){
    x = getRandomX(0, canvasFrame.width);
    y = getRandomY(0, canvasFrame.height);

    contextFrame.fillStyle = 'rgb(200, 0, 0)';
    contextFrame.fillRect(x, y, 50, 50);
  }
}

function ClickOnRectangle() {
  if (startgame === true) {
    var realMousePos = getMousePos(canvasFrame, event);
    var x_max = x + 50;
    var y_max = y + 50;
    console.log(x);
    console.log(y);
    console.log(realMousePos.mouse_x);
    console.log(realMousePos.mouse_y);

    if ( realMousePos.mouse_x < x_max && realMousePos.mouse_x > x &&
        realMousePos.mouse_y > y && realMousePos.mouse_y < y_max )
      {
        contextFrame.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
        score = score + 1;
        document.getElementById("score").innerHTML = score;
        CreateBox();
      }
  }
}
