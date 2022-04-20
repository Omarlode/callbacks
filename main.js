let promesa = new Promise((resolve, reject) => {
    setTimeout (() => {
    resolve("OK");
    }, 1000);
    });

    const loader = document.getElementById ('loader')

    loader.style.display = 'block';
    promesa
    .then((data) => {
    console.log(data);
    })
    .catch((err) => console.log(err.message))
    .finally(function () {
    loader.style.display = 'cargando';
    })
document.getElementById("btn1").addEventListener("click", function () {
    console.log("has pulsado el botón 1");
})

/*otro modo
function saludar(nombre) {
if(nombre==""){
    alert("ingresa nombre")
}else{
    alert("Hola " + nombre);
    }
    }*/
function saludar(nombre) {

    alert("Hola " + nombre);
    }
    
    function ingresarUsuario(callback) {
    let nombre = prompt("Ingresa tu nombre");
    console.log(nombre)
    if (nombre != null && nombre != "" ) {
        callback(nombre);
    } else if(nombre == ""){//cambiar el ifelse + &&nombre!="" por el OTRO MODO
        alert("INGRESA NOMBRE")
    }
    
    }
    
    ingresarUsuario(saludar);