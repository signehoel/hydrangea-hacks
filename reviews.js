fetch('reviews.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
});

function appendData(data) {
    var mainContainer = document.getElementById("reviews");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.className = "card-panel deep-purple lighten-5"
      var html = `<span class=""><h5>${data[i].headline}</h5><p>${data[i].name}</p><p>${data[i].description}</p></span>`
      div.innerHTML = html;
      mainContainer.appendChild(div);
    }
  }