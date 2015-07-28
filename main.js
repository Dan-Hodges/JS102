function sorter (myArray) {
return myArray.sort();
}
function largerThan (myArray, newArray) {
  for (var i = 0; i <= myArray.length; i++) {
    if (myArray[i] > 24) {
      var newItem = myArray[i]; 
      newArray.push(newItem);
    }
  }
}
$(document).ready(function() {
  $('#submit').click(function() {
    arrayLarge = [];
    arrayOriginal = [];
    newArray = [];
    var myString;
    var myOutput = '';
    console.log("at least the click works");
    myString = $('#input').val(); 
    console.log("my string is" + myString);
    arrayOriginal = myString.split(',');
    console.log("my array original is " + arrayOriginal);
    largerThan(arrayOriginal, newArray);
    console.log("The new array is:" + newArray);
    for (var i = 0; i < newArray.length; i++) {
      myOutput += "<div class='number'>" + newArray[i] + "</div>"
    }
    console.log("here's my output:" + myOutput);
    $('#content').html(myOutput);
  });
});  
