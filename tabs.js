function cambiarPestaña(numero) {
    const body = document.getElementById("body");
    const text = document.getElementById("text");
    const botones = document.querySelectorAll(".boton");

    botones.forEach(b => b.classList.remove("active"));
    botones[numero - 1].classList.add("active");

    if( numero === 1) {
        container.style.backgroundColor="#3498db";
        text.textContent = "Bienvenido a la pestaña 1";
    }

    if( numero === 2) {
        container.style.backgroundColor = "#8CCFAB";
        text.textContent = "Bienvenido, estàs en la pestaña 2"
    }

    if(numero === 3) {
        container.style.backgroundColor = "#8F78CF";
        text.textContent = "Bienvenido, estàs en la pestaña 3";
    }

    if(numero === 4) {
        container.style.backgroundColor = "#29A6A4";
        text.textContent = "Bienvenido, estàs en la pestaña 4";
    }
} 
cambiarPestaña(1);
