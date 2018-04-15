var popup = document.getElementById('newpostpopup');

var newpostbutton = document.getElementById("newpostbutton");

var closebutton = document.getElementsByClassName("closebutton")[0];

newpostbutton.onclick = function() {
    popup.style.display = "block";
}

closebutton.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

var like = function() {
  document.getElementById("currentlike").value = parseInt(document.getElementById("currentlike").value,10) + 1;
};
