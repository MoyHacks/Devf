

let sesiones = [
    { id:1, nombre: "Mali", saldo: 200 , pin: "1234" },
    { id:2, nombre: "Gera", saldo: 290 , pin: "1234" },
    { id:3, nombre: "Maui", saldo: 670 , pin: "1234" }
]
function cargar(){    
    agregar('sesiones',sesiones);
 
}

function agregar(key, items){
    localStorage.setItem(key,JSON.stringify(items));
   // console.log(localStorage.getItem('sesiones'));
}

let session;
let jsonData=JSON.parse(localStorage.getItem('sesiones'));
console.log(jsonData);
function login(){    
    const username = document.getElementById("user").value;
    const pin = document.getElementById("pin").value;
    const boolean = search(username,pin);
    const id =jsonData.filter(activo => activo.id == session.id);

    // session = jsonData.filter(activo => activo.id == "1")
      
      console.log(id);
    

    if (boolean == true){
     window.open("/views/main.html");
    }else{
        alert("Error Usuario o Contraseña Erroneo");
    }
}




function search(username,pin){
        let json = jsonData;
        console.log(json);
        let boolean ; 
       
        for(let i= 0; i < json.length;i++){
            if(username == json[i].nombre && pin == json[i].pin){
                session = json[i];
                agregar('sesion',session);
                boolean = true;
               
                return boolean;
            }else{
                    boolean = "false";
                }    
        } return boolean;
}

