let list = document.getElementById("albums");

const getAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();

  data.map(({ title }) => {
    let li = document.createElement("li");
    li.innerHTML = title;
    li.classList.add("albums");

    list.append(li);
  });
};

getAlbums();
