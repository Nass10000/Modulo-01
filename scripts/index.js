
class Activity {
    constructor(id, title, description, url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }


 

    createCard() {
        const newdiv = document.createElement("div");
        newdiv.classList.add("card-container");

        const tituloTarjeta = document.createElement("p");
        tituloTarjeta.textContent = this.title;
        newdiv.appendChild(tituloTarjeta);

        const div2 = document.createElement("div");
        div2.textContent = this.description;
        div2.classList.add("card-description");
        newdiv.appendChild(div2);

        const enlace = document.createElement("img");
        enlace.src = this.url;
        enlace.classList.add("card-img");
        newdiv.appendChild(enlace);

        const btnEliminar=document.createElement("i");
        btnEliminar.classList.add("fa-solid");
        btnEliminar.classList.add("fa-rectangle-xmark");
        btnEliminar.classList.add("close-card");

        newdiv.appendChild(btnEliminar);

        btnEliminar.addEventListener("click",function () {
            newdiv.remove();
        });

        document.body.appendChild(newdiv);     
}
}

class Repository {
    constructor() {
        this.activities = [];
        this.index = 0; // Move index definition here
    }

    receiveInf(){
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const url = document.getElementById("url-imagen").value;
        if (title === "" || description === "" || url === "") {
            return alert("Diligencia todos los campos del formulario");
        } else {
            this.addActivity(title, description, url);
        }
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("url-imagen").value = "";
    }

    addActivity(title, description, url) {
        const actividad = new Activity(this.index, title, description, url);
        actividad.createCard();
        this.index++;
    }

    imprimir() {
        const boton = document.getElementById("btn-submit");
        boton.addEventListener("click", () => {
            this.receiveInf();
        });
    }

    }
        


const repository = new Repository();
repository.imprimir();


