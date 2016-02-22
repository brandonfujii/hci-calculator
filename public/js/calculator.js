var $clearButton = $(".clear-button"),
$display = $(".display ul li"),
$numButton = $(".num"),
$signButton = $(".sign-button"),
$decButton = $(".decimal-button");

$clearButton.on("click", function() {
  $display.text("0");
});

$numButton.on("click", function() {
  var curr = $(this).data("num");
  var displayLen = $display.text().length;
  var currDisplay = parseInt($display.text());
  var totalValue;
  if (currDisplay != 0) {
    if (displayLen <= 14) {
      totalValue = $display.text() + curr.toString();
    }
  }
  else {
    totalValue = curr.toString();
  }
  $display.text(totalValue);
});

$decButton.on("click", function() {
  if ($display.text().indexOf(".") !== -1) {
    console.log("You have already inputted a decimal.");
  }
  else {
    var totalValue  = $display.text() + ".";

    $display.text(totalValue);
  }
});

$signButton.on("click", function() {

  if ($display.text().indexOf(".") !== -1) {
    var currVal  = parseFloat($display.text());
  }
  else {
    var currVal  = parseInt($display.text());
  }
  currVal = -currVal;
  $display.text(currVal.toString());
});
