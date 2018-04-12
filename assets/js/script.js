var popup = document.getElementById('newpostpopup');

var btn = document.getElementById("newpostbutton");

var button = document.getElementsByClassName("closebutton")[0];

btn.onclick = function() {
    popup.style.display = "block";
}

button.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
