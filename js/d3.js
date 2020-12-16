var a = 0;
var b = "asd";
var c;

var d = c + 0;

console.log(c);
document.write(d);

if (a === b) document.write(`<h1>Equal</h1>`);
else document.write(`<h1>Not Equal</h1>`);

if (d) document.write(`<h1>Truthy</h1>`);
else document.write(`<h1>Falsy</h1>`);
