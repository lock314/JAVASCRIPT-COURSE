const task3Element = document.getElementById("task-3");

function helloThere() {
  alert("Obi-wan says hello there");
}
helloThere();

function helloThereName(name) {
  alert(`Obi-wan says hello there ${name}`);
}
helloThereName("Anakan");

task3Element.addEventListener("click", helloThere);

function top3StarWarsMovies(movie1, movie2, movie3) {
  return alert(
    `The top 3 Star Wars films are ${movie1}, ${movie2} and lastly ${movie3}.`
  );
}

top3StarWarsMovies(
  "The Phantom Menice",
  "The Empire Strikes Back",
  "The Force Awakens"
);
