
    //Elemento que desencadena la acción
function getButton() {
    return document.getElementById("btn-submit"); 
}
                                
                            

// Poner a la escucha el evento que desencadena todas las acciones
if(typeof window !== 'undefined') {
    let button=getButton();
    button.addEventListener("click", handler);
                                
 }
    



function handler() {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const url = document.getElementById("url-imagen").value.trim();

    if (title === "" || description === "" || url === "") {
        return alert("Diligencia todos los campos del formulario");
    } else {
        repository.createActivity(title, description, url);
    }

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("url-imagen").value = "";
}

class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

function createCard(tarea) {
    const { title, description, imgUrl } = tarea;
    
    const newdiv = document.createElement("div");
    newdiv.classList.add("card-container");

    const tituloTarjeta = document.createElement("h3");
    tituloTarjeta.textContent = title;
    newdiv.appendChild(tituloTarjeta);

    const div2 = document.createElement("p");
    div2.textContent = description;
    div2.classList.add("card-description");
    newdiv.appendChild(div2);

    const enlace = document.createElement("img");
    enlace.src = imgUrl;
    enlace.classList.add("card-img");
    newdiv.appendChild(enlace);

    const btnEliminar = document.createElement("i");
    btnEliminar.classList.add("fa-solid");
    btnEliminar.classList.add("fa-rectangle-xmark");
    btnEliminar.classList.add("close-card");
    btnEliminar.id = "btnEliminar";

    newdiv.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", function() {
        repository.deleteActivity(tarea.id);
        newdiv.remove();
    });

    return newdiv;
}

function createElement() {
    const container = document.getElementById("container-cards"); // Obtener el contenedor por ID
    container.innerHTML = ""; // Limpiar el contenedor antes de agregar elementos
    
    const activities = repository.getAllActivities(); // Obtener todas las actividades
    console.log(activities);
    const activityElements = activities.map(activity => createCard(activity)); // Crear elementos HTML para cada actividad

    activityElements.forEach(element => {
        container.appendChild(element); // Agregar cada elemento al contenedor
    });
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        this.id++;
        const tarea = new Activity(this.id, title, description, imgUrl);
        this.activities.push(tarea);
        createElement(); // Llamar a createElement para actualizar la vista
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(item => item.id !== id);
        createElement(); // Llamar a createElement para actualizar la vista
    }
}

const repository = new Repository(); // Instancia de Repository
module.exports={Activity,Repository};

