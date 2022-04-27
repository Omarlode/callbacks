onRequest();
//onRequestuser();
/* async function onRequestuser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const users2 = await response.json();
    printName(users2);
  } catch (error) {
    console.log(error);
  }
} */
async function onRequest() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const albums = await response.json();
    printData(albums);
  } catch (error) {
    console.log(error);
  }
}
/* async function onRequest() {
  try {
    const response = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
        response.json()
      ),

      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json()
      ),
    ]);
    for (var i of response) {
      console.log(`RESPONSE ITEM \n`);
      for (var obj of i) {
        console.log(obj);
        //logger utility method, logs output to screen
      }
    }
  } catch (error) {
    console.log(error);
  } */
/*     if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const albums = await response.json();
    const users = await response.json();
    printData(albums, users);
  } catch (error) {
    console.log(error);
  } 
}*/

//let userTemporal = [];
/* function printName(users2) {
  const container = document.getElementById("container");
  for (const user2 of users2) {
    const pNombre = document.createElement("p");
    const div = document.createElement("div");

    pNombre.textContent = user2.name;

    div.appendChild(pNombre);
    container.appendChild(div);
  }
} */
function printData(albums) {
  const container = document.getElementById("container");

  for (const album of albums) {
    const p = document.createElement("h2");
    //const pNombre = document.createElement("p");
    const div = document.createElement("div");
    const a = document.createElement("a");
    a.href = `photos.html?albumId=${album.id}`;
    p.textContent = album.title;
    //pNombre.textContent = user.name;

    //div.appendChild(pNombre);
    a.appendChild(p);
    div.appendChild(a);
    container.appendChild(div);
  }
}
