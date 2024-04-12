console.log("estamos ejecutando javascript");

class Activity {
    constructor(id, title, description, url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }

    // Método para crear la tarjeta y agregarla al DOM
    createCard() {
        // Creo el contenedor de la tarjeta
        const newdiv = document.createElement("div");
        newdiv.classList.add("card-container");

        // Creo un nuevo div donde va a ir el título
        const tituloTarjeta = document.createElement("p");
        tituloTarjeta.textContent = this.title;
        newdiv.appendChild(tituloTarjeta);

        // Creo un div donde va a ir la descripción
        const div2 = document.createElement("div");
        div2.textContent = this.description;
        newdiv.appendChild(div2);

        // Creo un enlace
        const enlace = document.createElement("a");
        enlace.textContent = this.url;
        newdiv.appendChild(enlace);

        // Agrego el contenedor al body
        document.body.appendChild(newdiv);
    }
}

// Ejemplo de uso
/*const actividad = new Activity(1, "Título de la tarjeta", "Descripción de la tarjeta", "http://www.example.com");*/
/*actividad.createCard();*/


class Repository{
    constructor(){
        this.activities=[];
    }


    // metodos que reciba una actividad y la guarde en el array
    reciveInf(){
        //obtener los datos de los inputs
        
        const title= document.getElementById("title").value;
        const description=document.getElementById("description").value;
        const url=document.getElementById("url-imagen").value;
        if(title==""|| description==""|| url==""){
            return alert("Diligencia todos los campos del formulario");
        }else{
            this.addActivity(title,description,url);
            
        }
        document.getElementById("title").value="";
        document.getElementById("description").value="";
        document.getElementById("url-imagen").value="";
        
    };

    addActivity(title,description,url){
        let index=0;
        const actividad= new Activity(index,title,description,url);
        actividad.createCard();
        /*const activity={
            index:index,
            title:title,
            description:description,
            url:url
        }
        this.activities.push(activity);*/
        index++;
    }
    imprimir(){
        const boton=document.getElementById("btn-submit");
        boton.addEventListener("click",()=>{
            this.reciveInf();
        });
    }
    
    
    
    
    // metodo que permita retornar todas las actividades
   /*  getAllActivities() {
        return this.activities;
    } */


    // un metodo que permita filtrar las actividades 
}
const repository= new Repository();
repository.imprimir();

