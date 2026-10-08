/* Brota - comportamiento común (se ejecuta en todas las páginas) */
$(function () {
  // JavaScript vanilla: contador de riegos
  var boton = document.getElementById("regar");
  if (boton) {
    var riegos = 0;
    boton.addEventListener("click", function () {
      riegos = riegos + 1;
      boton.textContent = "Riegos: " + riegos;
    });
  }

  // jQuery: efectos de la caja
  if ($("#caja").length) {
    $("#mostrar").click(function () { $("#caja").fadeIn(); });
    $("#alternar").click(function () { $("#caja").slideToggle(); });
  }

  // Cuestionario
  var contenedor = document.getElementById("quiz");
  if (!contenedor) return;

  var preguntas = [
    { q: "¿Qué rol cumple CSS en una página web?", o: ["Estructura", "Estilo", "Comportamiento"], c: 1 },
    { q: "¿Qué significa \"Vanilla\" en JS Vanilla?", o: ["JavaScript puro, sin librerías", "Una versión antigua", "Un framework"], c: 0 },
    { q: "¿Qué evento se dispara al hacer clic en un botón?", o: ["hover", "mouseover", "click"], c: 2 },
    { q: "¿Qué símbolo usa jQuery para seleccionar elementos?", o: ["#", "$", "@"], c: 1 },
    { q: "¿Qué método de jQuery muestra u oculta con deslizamiento?", o: ["slideToggle()", "fadeIn()", "hide()"], c: 0 },
    { q: "En JSON, las claves siempre llevan:", o: ["Comillas simples", "Sin comillas", "Comillas dobles"], c: 2 },
    { q: "¿Qué función convierte una cadena JSON en un objeto?", o: ["JSON.stringify()", "JSON.parse()", "JSON.fetch()"], c: 1 },
    { q: "¿Qué hace el DNS?", o: ["Guarda los archivos del sitio", "Traduce un dominio a la IP del servidor", "Diseña la página"], c: 1 }
  ];

  preguntas.forEach(function (p, i) {
    var fs = document.createElement("fieldset");
    fs.className = "pregunta";
    fs.style.minWidth = "0";
    var html = "<h3>" + (i + 1) + ". " + p.q + "</h3>";
    p.o.forEach(function (op, j) {
      html += '<label><input type="radio" name="p' + i + '" value="' + j + '"> ' + op + "</label>";
    });
    fs.innerHTML = html;
    contenedor.appendChild(fs);
  });

  document.getElementById("revisar").addEventListener("click", function () {
    var aciertos = 0, sinResponder = 0;
    preguntas.forEach(function (p, i) {
      var fs = contenedor.children[i];
      var marcada = fs.querySelector("input:checked");
      fs.classList.remove("ok", "mal");
      if (!marcada) { sinResponder++; return; }
      if (Number(marcada.value) === p.c) { aciertos++; fs.classList.add("ok"); }
      else { fs.classList.add("mal"); }
    });
    var nota = document.getElementById("nota");
    nota.textContent = sinResponder
      ? "Te faltan " + sinResponder + " pregunta(s) por responder. Aciertos hasta ahora: " + aciertos + " de " + preguntas.length + "."
      : "Obtuviste " + aciertos + " de " + preguntas.length + (aciertos === preguntas.length ? ". ¡Excelente!" : ". Revisa las que están en rojo.");
  });
});
