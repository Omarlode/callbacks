
/* let promesa = new Promise((resolve, reject) => {
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
    }) */
    /* console.log("Inicio JS")


let promesa = new Promise((resolve, reject) => {
    console.log("Empieza el Timeout")
    setTimeout(() => {
        console.log("Termina el Timeout")
        //resolve("OK");
        // o
        reject(new Error("Ocurrió un error"));
    }, 2000);
});


console.log("Ejecuto la promesa")
promesa
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err.message))
    .finally(function () {
        console.log('Ejecuto siempre. Por ejemplo ocultariamos un loader!!!')
    })
console.log("Termino de ejecutar la promesa")
 


/*
Inicio JS
Empieza el Timeout
Ejecuto la promesa
Termino de ejecutar la promesa
Termina el Timeout
Ocurrió un error
Ejecuto siempre. Por ejemplo ocultariamos un loader!!!*/


//assync/await
function resolveAfter2Seconds() {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve('resolved');
    }, 2000);
    });
    }
    
    async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
    }
    asyncCall();