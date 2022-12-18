var mouseevent="empty";
var lastpositionofx,lastpositionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var colour="red";
var linewidth=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
mouseevent="mousedown";


}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseevent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle= colour;
ctx.lineWidth=linewidth;
console.log("Last position of x and y coordinates = ");
 console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
 ctx.moveTo(lastpositionofx,lastpositionofy);
 console.log("Current position of x and y coordinates = ");
  console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
  ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();


}
lastpositionofx=current_position_of_mouse_x;
lastpositionofy=current_position_of_mouse_y;


}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseevent="mouseup";


}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouseevent="mouseleave";


}

