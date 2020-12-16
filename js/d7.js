$("#btn").click(function () {
  var dataDiv = document.getElementById("data");

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function (data) {
      dataDiv.innerHTML = `<p>${JSON.stringify(data)}</p>`;
    },
    /* 
        error function will be executed if there was 
        a problem getting data from server. Try removing
        some characters from url....
    */
    error: function (xhr, status, message) {
      dataDiv.innerHTML = `<h1>Error Getting Data</h1>`;
    },
  });
});
