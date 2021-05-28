/*

$('."submit-button').on('click', function makeGrid(event) {
  // prevent page refreshing when clicking submit
  event.preventDefault();
  let mouseIsDown = false;
  let rows = userHeight.val();
  let columns = userWidth.val();

  grid.children().remove(); // delete any previous table rows






  const userHeight = $('#inputHeight');
  const userWidth = $('#inputWidth');
  const displayHeight = $('#gridHeightDisplay');
  const displayWidth = $('#gridWidthDisplay');

*/







window.onload = function() {
    var mouse = false;
    var canvas = document.getElementById("canvas1");
    var contenedor = document.getElementById("container");
    var cuadritos = [];
    var sizeCuadro = { ancho: 16, alto: 16 };
    var color = "";
    var inputColor = document.getElementById("color-picker");
    var inputHeight = document.getElementById("input-height");
    var inputWeight = document.getElementById("input-width");
  
    if (canvas && canvas.getContext) {
      var ctx = canvas.getContext("2d");
      if (ctx) {
        function dibujaGrid(disX, disY, anchoLinea, color) {
          ctx.strokeStyle = color;
          ctx.lineWidth = anchoLinea;
          var columnas = [];
          var filas = [];
          for (i = disX; i < canvas.width; i += disX) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
            columnas.push(i);
          }
          for (i = disY; i < canvas.height; i += disY) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(ctx.canvas.width, i);
            ctx.stroke();
            filas.push(i);
          }
          columnas.push(0);
          filas.push(0);
          for (x = 0; x < columnas.length; x++) {
            for (y = 0; y < filas.length; y++) {
              cuadritos.push([columnas[x], filas[y], disX, disY]);
            }
          }
        }
  
        function fillCell(x, y) {
          color = inputColor.value;
          ctx.fillStyle = color;
          for (i = 0; i < cuadritos.length; i++) {
            var cuadro = cuadritos[i];
            if (
              x > cuadro[0] &&
              x < cuadro[0] + cuadro[2] &&
              y > cuadro[1] &&
              y < cuadro[1] + cuadro[3]
            ) {
              ctx.fillRect(
                cuadro[0],
                cuadro[1],
                sizeCuadro.ancho,
                sizeCuadro.alto
              );
              break;
            }
          }
          dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 0.4, "#44414B");
        }
  
        canvas.onmousemove = function(e) {
          if (mouse) {
            var canvaspos = canvas.getBoundingClientRect();
            fillCell(e.clientX - canvaspos.left, e.clientY - canvaspos.top);
          }
        };
  
        canvas.onclick = function(e) {
          var canvaspos = canvas.getBoundingClientRect();
          fillCell(e.clientX - canvaspos.left, e.clientY - canvaspos.top);
        };
  
        canvas.onmousedown = function() {
          mouse = true;
        };
  
        canvas.onmouseup = function() {
          mouse = false;
        };
  
        inputHeight.addEventListener(
          "change",
          function() {
            cuadritos = [];
            sizeCuadro.ancho = parseInt(inputHeight.value);
            sizeCuadro.alto = parseInt(this.value);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 1, "#44414B");
          },
          false
        );
  
  
        inputWeight.addEventListener(
          "change",
          function() {
            cuadritos = [];
            sizeCuadro.ancho = parseInt(this.value);
            sizeCuadro.alto = parseInt(inputWeight.value);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 1, "#44414B");
          },
          false
        );


        canvas.width = container.offsetWidth - 400;
        dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 1, "#44414B");
      } else {
        alert("No se pudo cargar el contexto");
      }
    }
  };