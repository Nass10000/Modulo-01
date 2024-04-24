import { Activity, Repository } from "../scripts/index.js";


 
/////////////////////// SE EVALUA SI EL REPOPITORIO ESTA CREADO Y TIENE LOS METODOS, ARREGLOS Y PARAMETROS////////////////////////////////////////


describe("Debe tener una clase Repository", () => {
  const repository = new Repository();
    it("Debe de ser una clase", () => {
    expect(typeof Repository).toEqual('function');
    expect(Repository.prototype.constructor).toBeDefined();
  }); 

  it("debe de tener el método createActivity", () => {
    const repository = new Repository();
    expect(typeof repository.createActivity).toEqual('function');
  });
  
  it("debe de recibir como parametro tres valores",()=>{
    const repository = new Repository();
    const title="titulo";
    const description="descripcion";
    const imgUrl="url de la imagen";

    spyOn(repository,'createActivity');
    repository.createActivity(title,description,imgUrl);
    expect(repository.createActivity).toHaveBeenCalledOnceWith(title,description,imgUrl);
  });


///////////////////////////////////////
  it("debe de tener un método getAllActivities", () => {
    const repository = new Repository();
    expect(typeof repository.getAllActivities).toEqual('function');
  });
  
  it("el metodo getAllActivities debe de retornar un arreglo",()=>{
    const repository = new Repository();
    const arreglo= repository.getAllActivities();
    expect(Array.isArray(arreglo)).toBe(true);
  });
////////////////////////////////////////////////
  it("debe de tener un método deleteActivity", () => {
    const repository = new Repository();
    expect(typeof repository.deleteActivity).toEqual('function');
  });  

  it("el metodo deleteActivity debe de recibir como parametro un id", ()=>{
    const repository = new Repository();
    const id= 123;
    spyOn(repository,'deleteActivity');
    repository.deleteActivity(id);
    expect(repository.deleteActivity).toHaveBeenCalledWith(id);
  });  

});

////////////////// SE EVALUA QUE LA CLASE ACTIVITY FUE CREADA CON SUS PARAMETROS

describe("debe de tener una clase Activity", () => {
  it("debe de ser una clase", () => {
    expect(typeof Activity).toBe('function');
    expect(Activity.prototype.constructor).toBeDefined();
  }); 
  
  it("espero que el constructor contenga un id, title, description y url", () => {
    const activity = new Activity(1, "Título", "Descripción", "imagen.jpg");
    expect(activity.id).toBeDefined();
    expect(activity.title).toBeDefined();
    expect(activity.description).toBeDefined();
    expect(activity.imgUrl).toBeDefined();
  }); 
});

////////// EVALUAR LA FUNCION HANDLER

/* describe("la funcion handler fue creada",()=>{
  it("espero que sea una funcion",()=>{
    expect(handler()).toBe('function');
  });
})  */
/*
describe("la funcion createCard fue creada",()=>{
  it("espero que sea una funcion",()=>{
    expect(createCard).toBe('function');
  });
})
describe("la funcion createCard fue creada",()=>{
  it("espero que sea una funcion",()=>{
    expect(mentira).toBeDefined();
  });
}) */


   