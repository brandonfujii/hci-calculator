var $clearButton = $(".clear-button"),
$display = $(".display ul li"),
$numButton = $(".num"),
$signButton = $(".sign-button"),
$decButton = $(".decimal-button"),
$operation = $(".operation"),
$sign = $(".sign"),
numVal = 0,
nextVal = 0,
isCleared = true,
isDecimal = false,
isAdd = false,
isSub = false,
isMult = false,
isDiv = false,
next = false,
gaveRes = false;

$clearButton.on("click", function() {
  clearDisplay();
});

$numButton.on("click", function() {
  if (numVal.toString().length < 15) {
    if (isCleared) {
      $display.empty();
      isCleared = false;
    }
    if (next) {
      if (!nextVal) {
        $display.empty();
      }
      var num = $(this).text();
      var currVal = $display.text() + num;
      $display.text(currVal);
      nextVal = parseInt($display.text());
    }
    else {
      if (gaveRes) {
        $display.empty();
        gaveRes = false;
      }
      var num = $(this).text();
      var currVal = $display.text() + num;
      $display.text(currVal);
      numVal = parseInt($display.text());
    }
  }
});

$signButton.on("click", function() {
  numVal = -numVal;
  $display.text(numVal);
  console.log(numVal);
});

$decButton.on("click", function() {
  isDecimal = true;
});

$operation.on("click", function() {
  if (numVal) {
    next = true;
    console.log("next turned true");
  }
  switch($(this).attr("id")) {
    case "add":
      isAdd = true;
      $sign.text("+");
      break;
    case "subtract":
      isSub = true;
      $sign.text("-");
      break;
    case "multiply":
      isMult = true;
      $sign.text("*");
      break;
    case "divide":                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    case "divide":
      isDiv = true;
      $sign.html("&divide;");
      break;
    default:
      if (isAdd) {
        addNums();
        isAdd = false;
      }
      else if (isSub) {
        subNums();
        isSub = false;
      }
      else if (isMult) {
        multNums();
        isMult = false;
      }
      else {
        divNums();
        isDiv = false;
      }
      $sign.text("");
      next = false;
  }
});

function addNums() {
  numVal += nextVal;
  displayResult();
}

function subNums() {
  numVal -= nextVal;
  displayResult();
}

function multNums() {
  numVal *= nextVal;
  displayResult();
}

function divNums() {
  if (nextVal) {
    numVal /= nextVal;
  }
  else {
    numVal = NaN;
  }
  displayResult();
}

function displayResult() {
  $display.text(numVal);
  nextVal = 0;
  gaveRes = true;
}

function clearDisplay() {
  $display.empty();
  $display.text("0");
  numVal = 0;
  isCleared = true;
  next = false;
  gaveRes=false;
  console.log("next turned false");
}
