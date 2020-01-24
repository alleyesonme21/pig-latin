$(document).ready(function() {
  $("form#formy").submit(function(event) {
    event.preventDefault();
    var words = $("input#sentence").val();
    var sentarray = words.split("");
    var vowels = ["a", "e", "i", "o", "u"]

    console.log(sentarray);
  
    for (var index =0; index < vowels.length; index+= 1){
    if (sentarray[0] === vowels[index]) {
        alert("true");
    } else {
      
    }
    }
  


  });
});