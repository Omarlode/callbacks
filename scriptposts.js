const users = [
  {
    id: 1,
    name: "Tarja Turunen",
    picture: "https://www.rockaxis.com/img/newsList/3932597.jpg",
  },
  {
    id: 2,
    name: "Geralt de Rivia",
    picture:
      "https://cinematicos.net/wp-content/uploads/l-intro-1638473757.jpg",
  },
  {
    id: 3,
    name: "Slade Wilson",
    picture:
      "https://i.pinimg.com/564x/a3/ae/ba/a3aeba422305aa5996cc92fe4ac25b91.jpg",
  },
  {
    id: 4,
    name: "Matt Murdock",
    picture:
      "https://static.wikia.nocookie.net/marveldatabase/images/8/8c/Marvel%27s_Daredevil_poster_001_Textless.jpg",
  },
  {
    id: 5,
    name: "Walter Bishop",
    picture:
      "https://nocivodomingo.files.wordpress.com/2011/05/dr-walter-bishop2.jpg",
  },
  {
    id: 6,
    name: "Rick Sanchez",
    picture:
      "https://i.etsystatic.com/14076657/r/il/adb82c/1675985411/il_794xN.1675985411_xh02.jpg",
  },
  {
    id: 7,
    name: "Morrigan",
    picture: "https://images2.alphacoders.com/786/thumb-1920-786491.jpg",
  },
  {
    id: 8,
    name: "Dexter Morgan",
    picture:
      "https://wikiimg.tojsiabtv.com/wikipedia/en/thumb/4/47/Dexter_Morgan.jpg/440px-Dexter_Morgan.jpg",
  },
  {
    id: 9,
    name: "Root",
    picture: "https://i.ytimg.com/vi/cQpV7Of3vdQ/maxresdefault.jpg",
  },
  {
    id: 10,
    name: "Charles Widmore",
    picture:
      "https://static.wikia.nocookie.net/lostpedia/images/0/03/CharlesWidmore.jpg",
  },
];

onRequest();

async function onRequest() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const posts = await response.json();
    printData(posts);
  } catch (error) {
    console.log(error);
  }
}
let userTemporal = [];
function printData(posts) {
  posts.sort(() => Math.random() - 0.5);
  //posts = shuffle(posts);
  const container = document.getElementById("container");

  for (const post of posts) {
    const user = users.find((user) => user.id == post.userId);

    const p = document.createElement("h2");
    const img = document.createElement("img");
    const pname = document.createElement("p");
    const div = document.createElement("div");

    div.classList.add("usuario");
    img.classList.add("foto");

    img.src = user.picture;
    p.textContent = post.title;
    pname.textContent = user.name;

    div.appendChild(p);
    div.appendChild(img);
    div.appendChild(pname);
    container.appendChild(div);
  }
}
