var likebutton = document.getElementsByClassName('likebutton');

likebutton.onclick = function() {
    for(var i = 0; i<likebutton.length; i++){
    
     document.getElementsByClassName('currentlike')[i].value = "1";
    }

};
