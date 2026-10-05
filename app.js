const tareaBoton = document.querySelector("#agregar-tarea");
const tareaInput = document.querySelector("#nueva-tarea");
const tareaLista = document.querySelector(".lista-tareas");
const eliminarInput = document.querySelector("#eliminar-boton");
let modoEliminar = false;

function agregarTarea() {
    const tarea = tareaInput.value;
    if (tarea) {
        const li = document.createElement("li");
        li.textContent = tarea;
        tareaLista.appendChild(li);
        tareaInput.value = "";
        li.className = "tarea";
    }
    else {
        alert("Por favor, ingrese una tarea.");
    }
}

tareaBoton.addEventListener("click", agregarTarea);
tareaInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter'){
        agregarTarea();
    }
})

// Un único listener para los clicks sobre las tareas
tareaLista.addEventListener("click", (e) => {
    const item = e.target.closest("li");
    if (!item) return;

    if (modoEliminar) {
        item.classList.toggle("tarea-seleccionada");
    } else {
        item.classList.toggle("tarea-completada");
        item.classList.toggle("tarea");
    }
});

eliminarInput.addEventListener("click", () => {
    const items = tareaLista.querySelectorAll("li");

    if (!modoEliminar) {
        // Entrar al modo eliminar
        modoEliminar = true;
        items.forEach(li => li.classList.add("tarea-eliminable"));
        eliminarInput.textContent = "Confirmar";
    } else {
        // Borrar las seleccionadas y salir del modo
        items.forEach(li => {
            if (li.classList.contains("tarea-seleccionada")) {
                li.remove();
            } else {
                li.classList.remove("tarea-eliminable");
            }
        });
        modoEliminar = false;
        eliminarInput.textContent = "Eliminar";
    }
});