$(document).ready(function() {
  $("form#formy").submit(function(event) {
    event.preventDefault();
    var words = $("input#sentence").val();
    var sentarray = words.split("");
    var vowels = ["a", "e", "i", "o", "u"]; 

    console.log(sentarray);
  
    // for (var index =0; index < vowels.length; index+= 1){
    if (sentarray[0] === vowels[0] || vowels[1] || vowels[2] || vowels[3]) {
        console.log(sentarray.slice(1) + "ay");
    } else {
      alert("false");
    }
    // }
  


  });
});