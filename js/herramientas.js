/* Las 15 herramientas de Google: datos en formato JSON (arreglo de objetos) + filtros y ventana de detalle */
const HERRAMIENTAS = [
  { nombre: "Gemini", cat: "Inteligencia artificial", icono: "bi-stars", color: "#4285F4", pro: true,
    que: "Asistente de IA de Google para preguntar, escribir, resumir y generar ideas.",
    pasos: ["Entra a gemini.google.com con tu cuenta de Google.", "Escribe una instrucción clara: qué quieres, para quién y en qué formato.", "Pide ajustes (\"hazlo más corto\", \"añade un ejemplo\") hasta que quede bien."],
    idea: "Pedirle 5 nombres alternativos para la maceta o redactar la descripción del producto.",
    nota: "Hay uso gratuito; los modelos más avanzados y límites mayores son de planes de pago.", url: "https://gemini.google.com" },
  { nombre: "NotebookLM", cat: "Inteligencia artificial", icono: "bi-journal-richtext", color: "#34A853", pro: true,
    que: "Cuaderno con IA que responde solo con las fuentes que tú subes (PDF, enlaces, documentos).",
    pasos: ["Crea un cuaderno nuevo en notebooklm.google.com.", "Sube tus fuentes: apuntes, PDF o enlaces.", "Haz preguntas, genera resúmenes o guías de estudio con citas a tus fuentes."],
    idea: "Subir las páginas de JavaScript, jQuery y JSON para preparar el cuestionario.",
    nota: "Gratis con límites de uso; planes de pago amplían esos límites.", url: "https://notebooklm.google.com" },
  { nombre: "Google Docs", cat: "Productividad", icono: "bi-file-earmark-text", color: "#4285F4",
    que: "Procesador de texto en la nube con edición simultánea y comentarios.",
    pasos: ["Abre docs.google.com y crea un documento en blanco.", "Escribe y usa Compartir para invitar a tu equipo.", "Revisa cambios con comentarios y el historial de versiones."],
    idea: "Redactar la propuesta de valor de Brota entre varios compañeros a la vez.", url: "https://docs.google.com" },
  { nombre: "Google Sheets", cat: "Datos", icono: "bi-table", color: "#34A853",
    que: "Hojas de cálculo en línea con fórmulas, gráficos y trabajo colaborativo.",
    pasos: ["Crea una hoja en sheets.google.com.", "Escribe tus datos en columnas y usa fórmulas como =SUMA() o =PROMEDIO().", "Selecciona los datos y elige Insertar > Gráfico."],
    idea: "Calcular costos de la maceta (pila, mecha, plástico) y el precio de venta.", url: "https://sheets.google.com" },
  { nombre: "Google Slides", cat: "Productividad", icono: "bi-easel", color: "#F4B400",
    que: "Presentaciones en línea con plantillas, imágenes y modo presentador.",
    pasos: ["Crea una presentación en slides.google.com.", "Elige un tema, agrega diapositivas, imágenes y transiciones.", "Pulsa Presentar y comparte el enlace con tu clase."],
    idea: "Armar la presentación final del proyecto usando la paleta de Brota.", url: "https://slides.google.com" },
  { nombre: "Google Forms", cat: "Datos", icono: "bi-ui-checks", color: "#7248B9",
    que: "Creador de encuestas y cuestionarios con corrección automática.",
    pasos: ["Crea un formulario en forms.google.com.", "Agrega preguntas de opción múltiple, texto o escala.", "Comparte el enlace y mira las respuestas resumidas en gráficos."],
    idea: "Encuestar a posibles clientes: ¿cuántas veces se te ha muerto una planta?", url: "https://forms.google.com" },
  { nombre: "Google Drive", cat: "Productividad", icono: "bi-cloud-arrow-up", color: "#0F9D58",
    que: "Almacenamiento en la nube para guardar, organizar y compartir archivos.",
    pasos: ["Entra a drive.google.com y pulsa Nuevo > Carpeta.", "Sube archivos arrastrándolos a la ventana.", "Clic derecho > Compartir para dar permiso de ver o editar."],
    idea: "Una carpeta compartida con el logo, las fotos y los textos del proyecto.",
    nota: "El almacenamiento gratuito es limitado y se comparte con Gmail y Fotos.", url: "https://drive.google.com" },
  { nombre: "Google Meet", cat: "Comunicación", icono: "bi-camera-video", color: "#00897B",
    que: "Videollamadas para reuniones y clases a distancia.",
    pasos: ["Entra a meet.google.com y pulsa Nueva reunión.", "Copia el enlace y envíalo a los participantes.", "Usa Presentar pantalla para mostrar tu proyecto."],
    idea: "Reunirse con el equipo para revisar el sitio web antes de entregarlo.", url: "https://meet.google.com" },
  { nombre: "Google Calendar", cat: "Comunicación", icono: "bi-calendar-event", color: "#4285F4",
    que: "Calendario para organizar eventos, tareas y recordatorios.",
    pasos: ["Abre calendar.google.com y haz clic en un día.", "Pon título, hora y, si quieres, invitados y recordatorio.", "Activa notificaciones para que no se te pase la fecha."],
    idea: "Programar las fechas de entrega de cada parte del proyecto.", url: "https://calendar.google.com" },
  { nombre: "Google Keep", cat: "Productividad", icono: "bi-lightbulb", color: "#F4B400",
    que: "Notas rápidas, listas y recordatorios con colores y etiquetas.",
    pasos: ["Abre keep.google.com y escribe en Crear una nota.", "Cambia a lista, agrega color o etiqueta.", "Activa un recordatorio con fecha u hora."],
    idea: "Lista de pendientes: imágenes, carousel, modo oscuro, publicar en Vercel.", url: "https://keep.google.com" },
  { nombre: "Google Sites", cat: "Diseño y web", icono: "bi-window-sidebar", color: "#1A73E8",
    que: "Constructor de sitios web sin código, con bloques arrastrables.",
    pasos: ["Crea un sitio en sites.google.com y elige un tema.", "Arrastra bloques de texto, imágenes o videos.", "Pulsa Publicar y elige la dirección del sitio."],
    idea: "Comparar el resultado sin código con tu sitio hecho con HTML, CSS y JS.", url: "https://sites.google.com" },
  { nombre: "Google Vids", cat: "Diseño y web", icono: "bi-film", color: "#DB4437", pro: true,
    que: "Editor de video en línea para crear videos con plantillas, voz y escenas.",
    pasos: ["Abre docs.google.com/videos y elige una plantilla.", "Agrega escenas, textos, música y tus propias imágenes.", "Exporta o comparte el video."],
    idea: "Un video de 30 segundos mostrando cómo funciona la luz verde y amarilla.",
    nota: "Algunas funciones con IA requieren planes de pago.", url: "https://docs.google.com/videos" },
  { nombre: "Looker Studio", cat: "Datos", icono: "bi-bar-chart-line", color: "#4285F4",
    que: "Herramienta gratuita para convertir datos en paneles con gráficos.",
    pasos: ["Entra a lookerstudio.google.com y crea un informe.", "Conecta una fuente, por ejemplo una hoja de Google Sheets.", "Arrastra gráficos y comparte el informe."],
    idea: "Un panel con las respuestas de la encuesta de Google Forms.", url: "https://lookerstudio.google.com" },
  { nombre: "Google Fonts", cat: "Diseño y web", icono: "bi-fonts", color: "#EA4335",
    que: "Biblioteca de tipografías gratuitas listas para usar en una página web.",
    pasos: ["Busca una fuente en fonts.google.com.", "Selecciona los estilos y copia la etiqueta <link> que te da.", "Pégala en el <head> y úsala con font-family en CSS."],
    idea: "Este sitio ya la usa: Caveat para el nombre, Fraunces para los títulos y Nunito Sans para el texto.", url: "https://fonts.google.com" },
  { nombre: "Google Académico", cat: "Investigación", icono: "bi-mortarboard", color: "#4285F4",
    que: "Buscador de artículos científicos, tesis y libros.",
    pasos: ["Entra a scholar.google.com y escribe tu tema.", "Filtra por año con el menú de la izquierda.", "Usa Citar para obtener la referencia en formato APA o MLA."],
    idea: "Buscar estudios sobre riego por mecha para respaldar el producto.", url: "https://scholar.google.com" }
];

(function () {
  var grid = document.getElementById("gridHerramientas");
  var filtros = document.getElementById("filtros");
  var buscador = document.getElementById("buscador");
  var contador = document.getElementById("contador");
  var vacio = document.getElementById("vacio");
  var categoriaActiva = "Todas";

  var categorias = ["Todas"].concat(HERRAMIENTAS.map(function (h) { return h.cat; })
    .filter(function (c, i, a) { return a.indexOf(c) === i; }));

  function slug(n) { return n.toLowerCase().replace(/^google /, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-"); }
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }

  categorias.forEach(function (c) {
    var b = document.createElement("button"); b.type = "button"; b.textContent = c;
    if (c === "Todas") b.classList.add("activo");
    b.addEventListener("click", function () {
      categoriaActiva = c;
      filtros.querySelectorAll("button").forEach(function (x) { x.classList.toggle("activo", x === b); });
      pintar();
    });
    filtros.appendChild(b);
  });

  function pintar() {
    var q = buscador.value.trim().toLowerCase();
    grid.innerHTML = "";
    var lista = HERRAMIENTAS.filter(function (h) {
      return (categoriaActiva === "Todas" || h.cat === categoriaActiva) &&
        (h.nombre + " " + h.que + " " + h.cat).toLowerCase().indexOf(q) !== -1;
    });
    lista.forEach(function (h) {
      var col = document.createElement("div"); col.className = "col-12 col-md-6 col-lg-4";
      col.innerHTML =
        '<article class="tool-card" style="--c:' + h.color + '">' +
        '<span class="ico-wrap"><img class="ico-img" src="img/herramientas/' + slug(h.nombre) + '.png" alt="" width="40" height="40" onerror="this.remove()"><i class="bi ' + h.icono + ' ico" aria-hidden="true"></i></span>' +
        '<h3>' + esc(h.nombre) + '</h3>' +
        '<span class="etiqueta' + (h.pro ? ' pro' : '') + '">' + (h.pro ? 'Gratis + funciones de pago' : 'Gratis') + '</span>' +
        '<p>' + esc(h.que) + '</p>' +
        '<button type="button" class="btn" data-nombre="' + esc(h.nombre) + '">Cómo se usa</button>' +
        '</article>';
      grid.appendChild(col);
      window.brotaObservar(col.firstChild);
    });
    contador.textContent = "Mostrando " + lista.length + " de " + HERRAMIENTAS.length + " herramientas";
    vacio.classList.toggle("d-none", lista.length > 0);
  }

  var modalEl = document.getElementById("modalHerramienta");
  var modal = new bootstrap.Modal(modalEl);
  grid.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-nombre]"); if (!b) return;
    var h = HERRAMIENTAS.find(function (x) { return x.nombre === b.dataset.nombre; });
    document.getElementById("modalTitulo").textContent = h.nombre;
    document.getElementById("modalCuerpo").innerHTML =
      '<p>' + esc(h.que) + '</p>' +
      '<h3 class="h6">Cómo se usa</h3><ol>' + h.pasos.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ol>' +
      '<h3 class="h6">Idea para Brota</h3><p>' + esc(h.idea) + '</p>' +
      (h.nota ? '<p class="small text-body-secondary">' + esc(h.nota) + '</p>' : '');
    document.getElementById("modalEnlace").href = h.url;
    modal.show();
  });

  buscador.addEventListener("input", pintar);
  pintar();
})();
