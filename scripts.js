const btRequest = document.getElementById('btRequest')

btRequest.addEventListener('click', () => {
onRequest()
})

function onRequest() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }
    return response.json()
    })

.then(data => {
/*  console.log(data)
    console.log(data[0].id + " - "+ data[0].name) */
    for (const user of data){
        console.log(user.id + " - "+ user.name)
    }
})
//solo en el caso de sacar objeto en arrays

.catch(error => {
    console.log(error)
});
}

async function onRequestasync() {
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
    for (const user of data){
        console.log(user.id + " - "+ user.name)
    }

}