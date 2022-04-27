onRequest();

async function onRequest() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const albumid = urlParams.get("albumId");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumid}`
    );
    if (!response.ok) {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
    const photos = await response.json();
    printData(photos);
  } catch (error) {
    console.log(error);
  }
}
function printData(photos) {
  const container = document.getElementById("container");
  for (const photo of photos) {
    const img = document.createElement("img");
    const div = document.createElement("div");
    img.src = photo.url;

    div.appendChild(img);
    container.appendChild(div);
  }
  console.log(photos);
}
