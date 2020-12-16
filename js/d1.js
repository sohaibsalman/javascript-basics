var movies = [
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Matrix", genre: "action", year: 2019 },
  { name: "Avengers", genre: "action", year: 2019 },
];

function populateTable() {
  for (let i = 0; i < movies.length; i++) {
    document.write("<tr>");
    document.write(`<td>${movies[i].name}</td>`);
    document.write(`<td>${movies[i].genre}</td>`);
    document.write(`<td>${movies[i].year}</td>`);
    document.write("</tr>");
  }
}
