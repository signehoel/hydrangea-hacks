// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
window.onload = function(){
    
    var firebaseConfig = {
        apiKey: "AIzaSyB6o3KkIaL-aaATcIx4JlSmSP37nfkuZSg",
        authDomain: "safety-meter-130fa.firebaseapp.com",
        databaseURL: "https://safety-meter-130fa-default-rtdb.firebaseio.com",
        projectId: "safety-meter-130fa",
        storageBucket: "safety-meter-130fa.appspot.com",
        messagingSenderId: "510162915593",
        appId: "1:510162915593:web:cef8e5bf827d99e8e0c3d8",
        measurementId: "G-RBMG579SJ2"
    };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const dbRef = firebase.database().ref();
}
  

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    var name = message.data.name;
    var rating = message.data.rating;
    var headline = message.data.headline;
    var description = message.data.description;
    var website = message.data.website;

    if (message.command === 'fetch') {
        dbRef.set({
            name: name,
            rating: rating,
            headline: headline,
            description: description,
            website: website
        })
        var reviews = dbRef.child('reviews');
        sendResponse(re);
    }

    if(message.command === 'post'){
        var postData = {
            name: name,
            rating: rating,
            headline: headline,
            description: description,
            website: website
          };
        
          // Get a key for a new Post.
          var newPostKey = dbRef.child('reviews').push().key;
        
          var updates = {};
          updates['/reviews/' + newPostKey] = postData;
        
          sendResponse(dbRef.update(updates));
    }
  });

  

  function writeNewPost(name, rating, headline, description, website) {
    // A post entry.
    var postData = {
      name: name,
      rating: rating,
      headline: headline,
      description: description,
      website: website
    };
  
    // Get a key for a new Post.
    var newPostKey = dbRef.child('reviews').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/reviews/' + newPostKey] = postData;
  
    return dbRef.update(updates);
  }