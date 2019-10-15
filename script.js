function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 100, 50)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 100, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  }
}
