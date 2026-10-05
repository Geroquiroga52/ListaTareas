const tareaBoton = document.querySelector("#agregar-tarea");
const tareaInput = document.querySelector("#nueva-tarea");
const tareaLista = document.querySelector(".lista-tareas");

function agregarTarea() {
    const tarea = tareaInput.value;
    if (tarea) {
        const li = document.createElement("li");
        li.textContent = tarea;
        tareaLista.appendChild(li);
        tareaInput.value = "";
    }
    else {
        alert("Por favor, ingrese una tarea.");
    }
}

function completarTareas() {
    tareaLista.className = 'tarea-completada';
}

tareaBoton.addEventListener("click", agregarTarea);
tareaInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter'){
        agregarTarea();
    }
})
tareaLista.addEventListener('click', (e) => {
    const lista = e.target;
    lista.classList.toggle('tarea-completada');

});