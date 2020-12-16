var sumDiv = document.getElementById("sumDiv");
var funDiv = document.getElementById("funDiv");
function sum() {
  var s = 0;
  for (let i = 0; i < arguments.length; i++) {
    s = s + arguments[i];
  }
  return s;
}

var s = sum(3, 2, 4, 2, 3, 5, 6, 7, -10, 123, 2132312, 12321321);

sumDiv.innerHTML = `<h1>Sum is: ${s}</h1>`;

function fun() {
  return function () {
    alert("unkown function");
  };
}

fun()();
funDiv.innerHTML = `<h1>F is: ${f}</h1>`;
