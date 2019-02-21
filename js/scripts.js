$(document).ready(function() {
$("#blanks").submit(function(event) {
    event.preventDefault();
  var side1 = parseInt($("input#side1").val());
  var side2= parseInt($("input#side2").val());
  var side3 = parseInt($("input#side3").val());

  var result = '';
    if (side1 === side2 && side1 === side3 && side2 ===side3){
    result = 'Equilateral';
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3){
    result = 'Isosceles';
    }
    else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
    result = 'Not a triangle';
    }
    else if (side1 !== side2 && side1 !== side3 && side2 !== side3){
    result = 'Scalene';
    }

    $("#triangle").text(result);
    $("#result").show();

});
});
