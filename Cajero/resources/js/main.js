<<<<<<< HEAD
    
    let session = JSON.parse(localStorage.getItem('session'));

    
    function principal(){
        if(session == null){
            return window.open("./login.html","_self");
        }
        document.getElementById("p_user").innerHTML="Bienvenido "+ session.nombre;
        document.getElementById("p_money").innerHTML=" $ "+ session.saldo;
    }

    function depositar(){
            const cantidad = document.getElementById("cantidad_ingreso");
            if(cantidad.value == '' ){
               return alert("Error!","Ingrese una cantidad","error");
            }
            const total = session.saldo + parseInt(cantidad.value);
            if(total > 990){
                alert("Error!","Maximo de Cantidad Alcanzado","error");
                cantidad.value='';
            }else{
                alert("Aprobado!","Deposito Autorizado","success");
                cantidad.value='';
                session.saldo= total;
                localStorage.setItem('session',JSON.stringify(session));
                $('#ingresar').modal('hide');
            }
            principal();
    }

    function retirar(){
            const cantidad = document.getElementById("cantidad_retiro");
            const total = session.saldo - parseInt(cantidad.value);
            if(cantidad.value == '' ){
                return alert("Error!","Ingrese una cantidad","error");
            }
            if(total < 10){
                alert("Error!","Minimo de Cantidad Alcanzado","error");
                cantidad.value='';
            }else{
                alert("Aprobado!","Retiro Correcto","success")
                cantidad.value='';
                session.saldo= total;
                localStorage.setItem('session',JSON.stringify(session));
                $('#retirar').modal('hide');
            }
            principal();
    }

    function salir(){
            session = {};
            localStorage.clear();
            return window.open("./login.html","_self");
    }
=======
let session;

    let jsonData = fetch("/resources/db/datos.json")
    .then(response => {
    return  response.json();
    }).then (response => jsonData = response);
    const table = document.getElementById("table");



    function login(){    
        const username = document.getElementById("user").value;
        const pin = document.getElementById("pin").value;
        const boolean = search(username,pin);
        if (boolean == true){
        return window.open("http://localhost:5500/views/main.html","_self");
        }else{
            alert("Error Usuario o Contraseña Erroneo");
        }
    }



    function search(username,pin){
            let json = jsonData.accounts;
            let boolean ; 
            for(let i= 0; i < json.length;i++){
                if(username == json[i].nombre && pin == json[i].pin){
                    session = json[i];
                    boolean = true;
                    return boolean;
                }else{
                        boolean = "false";
                    }    
            } return boolean;
    }

    function consultar(){
        const username = "Gera";
        const pin = "1234";
        search(username,pin);
        $('#modal').on('show.bs.modal', function () {
        document.getElementById("nombre").value = session.nombre;
        console.log(session.nombre);
        document.getElementById("saldo").value = session.saldo;
        console.log(session.saldo);
        console.log("consultar");});
        
    }

    function ingresar(){
            const cantidad = document.getElementById("cantidad_ingreso");
            const total = session.saldo + parseInt(cantidad.value);
            console.log(total);
            if(total > 990){
                alert("Maximo de Cantidad alcansado");
            }else{
                alert("Ingreso Autorizado");
                cantidad.value='';
                session.saldo= total;
                $('#ingresar').modal('hide');
            }
            console.log(session.saldo);
        
    }

    function retirar(){
            const cantidad = document.getElementById("cantidad_retiro");
            const total = session.saldo - parseInt(cantidad.value);
            console.log(total);
            if(total < 10){
                alert("Minimo de Cantidad alcansado");
            }else{
                alert("Retiro Correcto")
                cantidad.value='';
                session.saldo= total;
                $('#retirar').modal('hide');
            }
            console.log(session.saldo);
    
    }

    function logout(){
        
        if(session == null){
            alert("error")
        }else{
            session = {};
            return window.open("http://localhost:5500/views/login.html","_self");
            ;
        }

    }
>>>>>>> 0a13c20d1d3159db89de0c370411a340e406f2ee
