const btRequest = document.getElementById('btRequest')

btRequest.addEventListener('click', () => {
onRequest()
})

/* funcion sincrona (recordar el llamada/nombre Id de cada elemento) 
function onRequest() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }
    return response.json()
    })

.then(data => { */
/*  console.log(data)
    console.log(data[0].id + " - "+ data[0].name)
    for (const user of data){
        console.log(user.id + " - "+ user.name)
    }
}) */
//solo en el caso de sacar objeto en arrays

/* .catch(error => {
    console.log(error)
});
} */

 async function onRequest() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
             const message = `Error: ${response.status}`;
            throw new Error(message);
        }
        const users = await response.json();
        printData(users);
    } catch (error) {
        console.log(error)
    }
} 
function printData(data){
    const lista=document.getElementById("lista")
    
    let bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});

console.log(bigCities);
    for (const user of data){
        
       
        //console.log(user.id + " - "+ user.name)
        
        const li=document.createElement("li")
        const a=document.createElement("a")
        
        a.textContent= user.name //usamos la variable user que para algo esta, junto con lo que queremos definir
       
        //concat1
        //a.href=`http://${user.website}`
        //concat2
        a.href="http://" + user.website

        li.appendChild(a)
        lista.appendChild(li)
        
    }

}