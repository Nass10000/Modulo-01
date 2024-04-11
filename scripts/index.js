console.log("estamos ejecutando javascript");

class Activity {
    constructor(id,title, description, url){
        this.id=id;
        this.title=title;
        this.description=description;
        this.url=url;
    }
}

class Repository{
    constructor(){
        this.activities=[];
    }


    // metodos que reciba una actividad y la guarde en el array
    reciveInf(){
        //obtener los datos de los inputs
        
        const title= document.getElementById("title").value;
        console.log(title);
        const description=document.getElementById("description").value;
        console.log(description);
        const url=document.getElementById("url-imagen").value;
        console.log(url);
        if(title==""|| description==""|| url==""){
            return alert("Diligencia todos los campos del formulario");
        }else{
            this.addActivity(title,description,url);
        }
        
        
        
        

    };

    addActivity(title,description,url){
        let index=0;
        const activity={
            index:index,
            title:title,
            description:description,
            url:url
        }
        this.activities.push(activity);
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

