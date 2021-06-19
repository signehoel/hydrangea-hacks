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
      var checked = "";
      var unchecked = "";
      for (var j = 0; j < data[i].rating; j ++){
          checked = checked + '<i class="material-icons">star</i>';
      }
      for (var j = 0; j < 5 - data[i].rating; j ++) {
        unchecked = unchecked + '<i class="material-icons">star_border</i>';
        }
      var html = `<span class="">
        <h5>${data[i].headline}</h5>
        ${checked} ${unchecked}
        <p>${data[i].name}</p>
        <p>${data[i].description}</p>
      </span>`
      div.innerHTML = html;
      mainContainer.appendChild(div);
    }
  }