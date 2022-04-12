let list = document.getElementById("albums");

const getAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();

  data.map(({ title }) => {
    let li = document.createElement("li");
    li.append(title);
    li.classList.add("albums");

    const button = document.createElement("button");
    button.className = "remove-button";
    button.innerText = "Delete";
    li.append(button);

    list.append(li);
  });
};

getAlbums();

list.onclick = function (event) {
  const isRemoveButton = event.target.className === "remove-button";

  if (isRemoveButton) {
    const li = event.target.closest("li");
    li.remove();
  }
};
