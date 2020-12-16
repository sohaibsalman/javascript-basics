var movie = {
  name: "Avengers",
  genre: "action",
  year: 2019,
  duration: 2.3,
  award: "Oscar",
};

console.log(movie["name"]);

var btn = document.getElementById("btn");

btn.onclick = function () {
  var input = document.getElementById("txt");
  var text = input.value;
  var movieDiv = document.getElementById("movieDiv");

  //   if (text === "name") movieDiv.innerHTML = movie.name;
  //   if (text === "genre") movieDiv.innerHTML = movie.genre;
  //   if (text === "year") movieDiv.innerHTML = movie.year;
  //   if (text === "duration") movieDiv.innerHTML = movie.duration;
  //   if (text === "award") movieDiv.innerHTML = movie.award;

  movieDiv.innerHTML = `<h1>${movie[text]}</h1>`;
};
