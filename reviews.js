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

chrome.runtime.sendMessage({command:"fetch", data: {name, website, description, rating, headline}},
(response)=> {
    console.log('received user data', response);
})

function appendData(data) {
    var mainContainer = document.getElementById("reviews");
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].website);
        let link = data[i].website;
        let name = data[i].name;
        let rating = data[i].rating;
        let headline = data[i].headline;
        let description = data[i].description;
        
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            if (url.includes(link)){
                var div = document.createElement("div");
    
                div.className = "card-panel deep-purple lighten-5";
                var checked = "";
                var unchecked = "";
                for (var j = 0; j < rating; j ++){
                    checked = checked + '<i class="material-icons">star</i>';
                }
                for (var j = 0; j < 5 - rating; j ++) {
                    unchecked = unchecked + '<i class="material-icons">star_border</i>';
                }
                var html = `<span class="">
                    <h5>${headline}</h5>
                    ${checked} ${unchecked}
                    <p>${name}</p>
                    <p>${description}</p>
                </span>`
                div.innerHTML = html;
                mainContainer.appendChild(div);
            }  
        });   
    }
  }