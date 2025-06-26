document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("successMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      msg.textContent = "¡Mensaje enviado con éxito!";
      form.reset();
      setTimeout(() => (msg.textContent = ""), 5000);
    } else {
      msg.textContent = "Ups, ocurrió un error. Intenta nuevamente.";
    }
  });
});
