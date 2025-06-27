
  const btnToggle = document.getElementById("modoOscuroToggle");
  const imgIcono = document.getElementById("iconoModo");

  // 1. Al cargar la página, aplicamos el modo guardado
  const modoGuardado = localStorage.getItem("modoOscuro");
  if (modoGuardado === "true") {
    document.documentElement.classList.add("dark-mode");
    imgIcono.src = "assets/img/sol.png";
    imgIcono.alt = "Cambiar a modo claro";
  } else {
    imgIcono.src = "assets/img/luna.png";
    imgIcono.alt = "Cambiar a modo oscuro";
  }

  // 2. Evento de clic para alternar
  btnToggle.addEventListener("click", () => {
    const esModoOscuro = document.documentElement.classList.toggle("dark-mode");

    if (esModoOscuro) {
      imgIcono.src = "assets/img/sol.png";
      imgIcono.alt = "Cambiar a modo claro";
    } else {
      imgIcono.src = "assets/img/luna.png";
      imgIcono.alt = "Cambiar a modo oscuro";
    }

    // 3. Guardamos la preferencia
    localStorage.setItem("modoOscuro", esModoOscuro);
  });


