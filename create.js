const urlParams = new
URLSearchParams(window.location.search);
const id = urlParams.get("search");//entre() el nombre de la url antes del =, es su nombre d id para buscarlo en el html const id = urlParams.get("palomitas");

//Imprimirá "hola"
console.log(id)

const form = document.getElementById ('form')

form.addEventListener ('submit', (e) => {
e.preventDefault ()
sendData(form)
})


async function sendData(form) {
    try {
        const formData = new FormData(form)
        const queryString = new URLSearchParams (formData).toString()
     const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
            method: "POST",
            body: queryString ,headers: {
    "Content-Type" : "application/x-www-form-urlencoded" ,
        },
    });
    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    console.log(data); 
    //forma1
    //console.log(data.title+ " "+ data.body)
    //forma2
    const valores = `title: ${data.title} cuerpo: ${data.body}`;
    console.log(valores);

/*     //nos da un objeto
        function printData(data){
            for (const user of data){
                console.log(user.id + " - "+ user.name)
            }
        
        } */
    //console.log(queryString)

    //alert("todo bien")
    //window.location.href="ajax.html"

    } catch (error) {
    console.log(error)
    }
}
