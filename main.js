// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const selectHeart = document.querySelectorAll('.like-glyph');
console.log(selectHeart);

selectHeart.forEach(selectHeart => selectHeart.addEventListener("click", likeHeart))

function likeHeart(event) {
  const redHeart = event.target;
  mimicServerCall()
    .then(function(messageToServer){
      alert(messageToServer);
      if(redHeart.innerText === EMPTY_HEART) {
        redHeart.classList.add("activated-heart");
        redHeart.innerText = FULL_HEART;
      }
      else {
        redHeart.classList.remove("activated-heart");
        redHeart.innerText = EMPTY_HEART;
      }
      
    })
    .catch(function(error) {
      alert(error);
      const popUp = document.querySelector(".hidden");
      popUp.classList.remove("hidden");
      const removePopUp = document.getElementById("modal")
      setTimeout(() => {removePopUp.classList.add("hidden")}, 3000);
      console.log('error message sent to server')
    });
}

// for(const liked of selectHeart) {
//   liked.addEventListener('click', likeHeart)
// }

// for(const unLiked of selectHeart) {
//   unLiked.addEventListener('click', unLikeHeart)
// }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
