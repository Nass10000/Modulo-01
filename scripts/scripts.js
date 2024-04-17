

/* 
//Elemento que desencadena la acción
const boton = document.getElementById("btn-submit");

// Poner a la escucha el evento que desencadena todas las acciones
boton.addEventListener("click", function() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const url = document.getElementById("url-imagen").value;

    if (title === "" || description === "" || url === "") {
        return alert("Diligencia todos los campos del formulario");
    } else {
        repository.createActivity(title, description, url); // Utilizar la instancia existente de Repository
    }

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("url-imagen").value = "";
}); */

class Activity {
    
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

function createCard(tarea) {
    const newdiv = document.createElement("div");
    newdiv.classList.add("card-container");

    const tituloTarjeta = document.createElement("p");
    tituloTarjeta.textContent = tarea.title;
    newdiv.appendChild(tituloTarjeta);

    const div2 = document.createElement("div");
    div2.textContent = tarea.description;
    div2.classList.add("card-description");
    newdiv.appendChild(div2);

    const enlace = document.createElement("img");
    enlace.src = tarea.imgUrl;
    enlace.classList.add("card-img");
    newdiv.appendChild(enlace);

    const btnEliminar = document.createElement("i");
    btnEliminar.classList.add("fa-solid");
    btnEliminar.classList.add("fa-rectangle-xmark");
    btnEliminar.classList.add("close-card");
    btnEliminar.id = "btnEliminar";

    newdiv.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", function() {
        repository.deleteActivity(tarea.id); // Utilizar la instancia existente de Repository
        newdiv.remove(); // Eliminar el elemento del DOM después de eliminarlo del arreglo
    });

    document.body.appendChild(newdiv);
}



class Repository {
    constructor() {
        this.activities = [];
        this.id=0;
        
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        this.id++;
        const tarea = new Activity(this.id,title,description,imgUrl);
        createCard(tarea);
        
        this.activities.push(tarea);
        
        //actividad.createCard();
    }

    // deleteActivity(id) {
    //     this.activities = this.activities.filter(item => item.id !== id);
        
    // }
}
const repository = new Repository();//01 crear una instancia de repositori

repository.createActivity("one piece","manga","fsfsdfsdf");
console.log(repository.getAllActivities());
repository.createActivity("dragon ball","manga","fsfsdfsdf");
console.log(repository.getAllActivities());