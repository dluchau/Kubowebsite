$(document).ready(function() {
    var counter = 0;
    if(localStorage.getItem("count") == null)
        $("#count").text(0);
    else {
        counter = localStorage.getItem("count");
        $("#count").text(counter);
    }
    
    $("#plus").click(function(){
      counter++;
      $("#count").text(counter);
      localStorage.setItem("count", counter);
    });
    
    $("#minus").click(function(){
      counter--;    
      $("#count").text(counter);
      localStorage.setItem("count", counter);
    });
});


