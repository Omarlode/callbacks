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
