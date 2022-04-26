const btRequest = document.getElementById('btRequest')
onRequest()


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
    const container=document.getElementById("container")

    //lista.innerHTML="" //Evita que se repitan(pero y si quiero que salgan 10 nuevos nombres debajo? o encima?)solucion1
    //filter es la muerte aqui lol



    for (const user of data){
       
        //console.log(user.id + " - "+ user.name)
        const norepes = userTemporal.find(newuser =>newuser.id != user.id )
        //console.log(norepes)
        if (!norepes){
            //const li=document.createElement("li")
            const a=document.createElement("a")
            const img=document.createElement("img")
            const p=document.createElement("p")
            const p2=document.createElement("p")
            const div=document.createElement("div")
            
            div.classList.add("celda")
            img.classList.add("image")

            //concat1
        //a.href=`http://${user.website}`
            //concat2
            a.href="http://" + user.website
            img.src="https://picsum.photos/200"

            p.textContent= user.name
            p2.textContent= user.company.catchPhrase
            a.textContent= user.website //usamos la variable user que para algo esta, junto con lo que queremos definir
            
            div.appendChild(img)
            div.appendChild(p)
            div.appendChild(p2)
            div.appendChild(a)
            //div.appendChild(div)
            container.appendChild(div)
            lista.appendChild(container)
        }
       

     
       
    }
    userTemporal=data
   
}