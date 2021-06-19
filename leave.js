//document.getElementById("submit").addEventListener("click", insert1());

window.onload=function(){
  document.getElementById("submit").addEventListener("click", insert1());
}

function insert1() {
  console.warn("hello");

  myJson = {
    first_name: document.getElementById("name").value,
    headline: document.getElementById("headline").value,
    description: document.getElementById("description").value,
  };

  window.localStorage.setItem('review', JSON.stringify(myJson));

  
  
  console.warn(myJson);
}
 
const form = document.querySelector('form');