// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     ctx.fillStyle = 'rgb(200, 100, 50)';
//     ctx.fillRect(10, 10, 50, 50);
//     ctx.fillStyle = 'rgba(0, 100, 200, 0.5)';
//     ctx.fillRect(30, 30, 50, 50);
//   }
// }
(function() {
  var canvas = document.getElementById('canvas'), context = canvas.getContext('2d'); 
  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    /**
    * Your drawings need to be inside this function otherwise they will be reset when 
    * you resize the browser window and the canvas goes will be cleared.
    */
    drawStuff(); 
  }
  resizeCanvas();
  function drawStuff() {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
})();
