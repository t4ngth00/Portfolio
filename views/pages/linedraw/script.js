// get permanent canvas
var canvasPerm = document.getElementById('canvasElementPermanent');
var contextPerm = canvasPerm.getContext('2d');

// Add the temporary canvas.
var container = canvasPerm.parentNode;
var canvas = document.createElement('canvas');
canvas.id     = 'canvasElementTemp';
canvas.width  = canvasPerm.width;
canvas.height = canvasPerm.height;
container.appendChild(canvas);

var context = canvas.getContext('2d');

// get the mouse position
function getMousePos(canvas, evt)
{
  var rect = canvas.getBoundingClientRect();

  return{
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}

var startPoint;
var mousedown = false;
// do this function when click and hold the cursor
function MouseDown()
{
  mousedown = true;
  startPoint = getMousePos(canvas, event);
}

// do this function when click hold and move the cursor
function MouseMove() {
  if(mousedown)
  {
    var realMousePos = getMousePos(canvas, event);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(startPoint.x,startPoint.y);
    context.lineTo(realMousePos.x, realMousePos.y);
    context.stroke();
    context.closePath();
  }
}

// do this function when release the cursor
function MouseUp() {
  mousedown = false;
  contextPerm.drawImage(canvas, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", MouseDown);
canvas.addEventListener("mousemove", MouseMove);
canvas.addEventListener("mouseup", MouseUp);
