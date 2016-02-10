var $clearButton = $(".clear-button");
var $display = $(".display ul li");
var $numButton = $(".num");
var $signButton = $(".sign-button");
var numVal = 0;
var isCleared = false;

$clearButton.on("click", function() {
  $display.empty();
  $display.text("0");
  numVal = 0;

  isCleared = true;
});

$numButton.on("click", function() {

  if (numVal.toString().length > 10) {
    $display.text("Please enter in a lesser value");
  } else {
    if (isCleared) {
      $display.empty();
      isCleared = false;
    }
    var num = $(this).text();
    var currVal = $display.text() + num;
    $display.text(currVal);
    numVal = parseInt($display.text());
    console.log(numVal);
  }

});

$signButton.on("click", function() {

});
