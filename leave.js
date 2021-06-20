//document.getElementById("submit").addEventListener("click", insert1());

window.onload=function(){
  name = document.getElementById("name").value;
  headline = document.getElementById("headline").value;
  rating = document.getElementById("rating").value;
  description = document.getElementById("description").value;
  website = document.getElementById("website").value;
  document.getElementById("submit").addEventListener("click", addReview(name, rating, headline, description, website));
}

function addReview(name, rating, headline, description, website) {
  chrome.runtime.sendMessage({command:"post", data: {name, website, description, rating, headline}},
    (response)=> {
    console.log('received user data', response);
})
}
