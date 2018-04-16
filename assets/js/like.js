var likebutton = document.getElementsByClassName('likebutton');


    for(var i = 0; i<likebutton.length; i++){
      (function(index){
        likebutton[index].addEventListener('click', function(){
          document.getElementsByClassName('currentlike')[index].value = parseInt(document.getElementsByClassName('currentlike')[index].value)+1;
        })
      })(i);

    }
