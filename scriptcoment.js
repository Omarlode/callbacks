onRequest();

async function onRequest() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId="${post.id}
    );
    // `comentarios.html?postId=${post.id}`;
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const coments = await response.json();
    printData(coments);
  } catch (error) {
    console.log(error);
  }
}
function printData(coments) {
  const container = document.getElementById("container");
  for (const coment of coments) {
    const pName = document.createElement("h2");
    const pBody = document.createElement("p");
    const pMail = document.createElement("p");
    const div = document.createElement("div");

    //camelcase
    //forma 1
    // a.href = "comentarios.html?postId=" + post.id;
    //forma2
    // a.href = `comentarios.html?postId=${post.id}`;

    //div.classList.add("xxxx");

    pName.textContent = coment.name;
    pBody.textContent = coment.body;
    pMail.textContent = coment.email;

    div.appendChild(pName);
    div.appendChild(pMail);
    div.appendChild(pBody);

    container.appendChild(div);
  }
}
