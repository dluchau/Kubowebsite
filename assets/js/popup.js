var popup = document.getElementById('newpostpopup');

var newpostbutton = document.getElementById("newpostbutton");

var closebutton = document.getElementsByClassName("closebutton")[0];

var popUpPost = document.getElementById("postButton");

var newPost = document.getElementById('new-post');

var textArea = document.getElementById('newpostform');

var inputField = document.getElementById('header-input');

newpostbutton.onclick = function() {
    popup.style.display = "block";
}

popUpPost.onclick = function (){
  var newPost = document.getElementById('new-post');
  var paragraph = document.createElement('P');
  var header = document.createElement('H2');
  var headerNode = document.createTextNode(inputField.value);
  var textnode = document.createTextNode(textArea.value);
  paragraph.appendChild(textnode);
  header.appendChild(headerNode);
document.getElementById('post').appendChild(header);
  document.getElementById('post').appendChild(paragraph);

  popup.style.display = "none";
  document.getElementsByClassName('forumbox')[0].style.display= "block";
}

closebutton.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
