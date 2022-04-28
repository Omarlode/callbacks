onRequest();

async function onRequest() {
  try {
    const response = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }
        return response.json();
      }),

      fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }
        return response.json();
      }),
    ]);

    let albums = response[0];
    let users = response[1];
    //console.log(albums);
    //console.log(users);
    printData(albums, users);

    /* for (var i of response) {
      console.log(`RESPONSE ITEM \n`);
      for (var obj of i) {
        console.log(obj); 
        //logger utility method, logs output to screen
      }
    }*/
  } catch (error) {
    console.log(error);
  }
}

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

function printData(albums, users) {
  const container = document.getElementById("container");

  for (const album of albums) {
    const user = users.find((user) => user.id == album.userId);

    const p = document.createElement("h2");
    const pNombre = document.createElement("p");
    const div = document.createElement("div");
    const a = document.createElement("a");
    a.href = `photos.html?albumId=${album.id}`;
    p.textContent = album.title;
    pNombre.textContent = user.name;

    div.appendChild(pNombre);

    a.appendChild(p);
    div.appendChild(a);
    container.appendChild(div);
  }
}

//forma2
/* async function requestAlbums(users) {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
      }
      const albums = await response.json();
      showData(albums, users);
  } catch (error) {
      console.log(error)
  }
}

async function requestUsers() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
      }
      const users = await response.json();
      requestAlbums(users)
  } catch (error) {
      console.log(error)
  }
}

requestUsers()

function showData(albums, users) {
  albums.sort(() => Math.random() - 0.5);
  const lista = document.getElementById("lista")
  for (const album of albums) {

      const user = users.find(newUser => newUser.id == album.userId);

      const title = document.createElement("h2")
      const userName = document.createElement("p")

      title.textContent = album.title
      userName.textContent = user.name

      lista.appendChild(title)
      lista.appendChild(userName)
  }
}
 */
//forma 3
/*async function requestAlbumsWithUsers() {
  try {
      const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!responseUsers.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
      }

      const users = await responseUsers.json();


      const responseAlbums = await fetch('https://jsonplaceholder.typicode.com/albums');
      if (!responseAlbums.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
      }
      const albums = await responseAlbums.json();

      showData(albums, users)
  } catch (error) {
      console.log(error)
  }
}

requestAlbumsWithUsers()

function showData(albums, users) {
  albums.sort(() => Math.random() - 0.5);
  const lista = document.getElementById("lista")
  for (const album of albums) {

      const user = users.find(newUser => newUser.id == album.userId);

      const title = document.createElement("h2")
      const userName = document.createElement("p")

      title.textContent = album.title
      userName.textContent = user.name

      lista.appendChild(title)
      lista.appendChild(userName)
  }
}*/
