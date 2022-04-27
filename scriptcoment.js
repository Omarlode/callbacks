onRequest();

async function onRequest() {
  try {
    //Obtener elementos query de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("postId");

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}` //${post.id}
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
    const pMail = document.createElement("a");
    const div = document.createElement("div");

    pMail.href = `mailto:${coment.email}`;
    //<a href="mailto:info@dds.com">info@adds.com</a>
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
