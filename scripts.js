const btRequest = document.getElementById('btRequest')

btRequest.addEventListener('click', () => {
onRequest()
})

/* funcion sincrona (recordar el llamada/nombre Id de cada elemento)*/ 

/* function onRequest2() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }
    return response.json()
    })

.then(data => { 
    console.log(data)
    console.log(data[0].id + " - "+ data[0].name)
    for (const user of data){
        console.log(user.id + " - "+ user.name)
    }
}) 
//solo en el caso de sacar objeto en arrays

 .catch(error => {
    console.log(error)
});
}  */

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

let userTemporal=[]
function printData(data){
    
    const lista=document.getElementById("lista")

    //lista.innerHTML="" //Evita que se repitan(pero y si quiero que salgan 10 nuevos nombres debajo? o encima?)solucion1
    //filter es la muerte aqui lol



    for (const user of data){
       
        //console.log(user.id + " - "+ user.name)
        const norepes = userTemporal.find(newuser =>newuser.id != user.id )
        //console.log(norepes)
        if (!norepes){
            const li=document.createElement("li")
        const a=document.createElement("a")
        
          //concat1
        //a.href=`http://${user.website}`
        //concat2
        a.href="http://" + user.website

        a.textContent= user.name //usamos la variable user que para algo esta, junto con lo que queremos definir

        li.appendChild(a)
        lista.appendChild(li) 
        }
       

     
       
    }
    userTemporal=data
   
}