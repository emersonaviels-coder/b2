/* Brota - modo claro/oscuro + animaciones suaves */
(function () {
  var raiz = document.documentElement;
  var reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var SOL = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var LUNA = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>';
  var FLECHA = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';

  /* ---- Modo claro / oscuro (también para los componentes de Bootstrap) ---- */
  var btn = document.getElementById("btnTema");
  function pintar() {
    if (!btn) return;
    var oscuro = raiz.getAttribute("data-tema") === "dark";
    btn.innerHTML = oscuro ? SOL : LUNA;
    btn.setAttribute("aria-label", oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    btn.title = btn.getAttribute("aria-label");
  }
  if (btn) btn.addEventListener("click", function () {
    var nuevo = raiz.getAttribute("data-tema") === "dark" ? "light" : "dark";
    raiz.setAttribute("data-tema", nuevo);
    raiz.setAttribute("data-bs-theme", nuevo);
    try { localStorage.setItem("tema", nuevo); } catch (e) {}
    pintar();
  });
  pintar();

  /* ---- Barra de progreso y botón "volver arriba" ---- */
  var barra = document.createElement("div"); barra.id = "progreso"; barra.setAttribute("aria-hidden", "true");
  var arriba = document.createElement("button"); arriba.id = "arriba"; arriba.type = "button";
  arriba.setAttribute("aria-label", "Volver arriba"); arriba.innerHTML = FLECHA;
  document.body.appendChild(barra); document.body.appendChild(arriba);
  arriba.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reducir ? "auto" : "smooth" }); });
  var esperando = false;
  function alDesplazar() {
    var alto = document.documentElement.scrollHeight - window.innerHeight;
    barra.style.width = (alto > 0 ? (window.scrollY / alto) * 100 : 0) + "%";
    arriba.classList.toggle("mostrar", window.scrollY > 400);
    esperando = false;
  }
  window.addEventListener("scroll", function () {
    if (!esperando) { esperando = true; requestAnimationFrame(alDesplazar); }
  }, { passive: true });
  alDesplazar();

  /* ---- Aparición al hacer scroll ---- */
  if ("IntersectionObserver" in window && !reducir) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll("main section, .paleta, .flujo").forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
    window.brotaObservar = function (el) { el.classList.add("reveal"); io.observe(el); };
  } else {
    window.brotaObservar = function () {};
  }

  /* ---- Navegación suave ---- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a"); if (!a) return;
    var href = a.getAttribute("href") || "";
    if (href.charAt(0) === "#" && href.length > 1) {
      var dest = document.querySelector(href);
      if (dest) { e.preventDefault(); dest.scrollIntoView({ behavior: reducir ? "auto" : "smooth" }); }
      return;
    }
    if (reducir || e.ctrlKey || e.metaKey || e.shiftKey || a.target === "_blank" || a.hasAttribute("download")) return;
    if (a.origin === location.origin && /\.html$/.test(a.pathname) && a.pathname !== location.pathname) {
      e.preventDefault();
      document.body.classList.add("saliendo");
      setTimeout(function () { location.href = a.href; }, 220);
    }
  });
  window.addEventListener("pageshow", function () { document.body.classList.remove("saliendo"); });
})();
