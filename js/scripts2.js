// business logic
var reLetters = (/[a-z]/i)
var reVowels = (/[aeiou]/i)

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var specialCondition = "qu";

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// function iteration: track letters of single words
function seekLetters(string) {
  var stringToCheck = string;
  var finalWord;
  console.log(stringToCheck);
  var stringSplit = stringToCheck.split("");
  for (var i = 0; i < numbers.length; i++) {
    if (stringSplit[0] == numbers[i]) {
      finalWord = stringToCheck;
      return finalWord;
    }
  }
  for(var i = 0; i < vowels.length; i++) {
    if (stringSplit[0].toLowerCase() == vowels[i]) {
      if (stringSplit.length > 1) {
        finalWord = stringToCheck.concat("way");
        return finalWord;
      }
      else {
        finalWord = stringToCheck.concat("ay");
        return finalWord;
      }
    }
  }
  // for (var i = 0; i < stringToCheck.length; i++) {
  //   for (var j = 0; j < consonants.length; j++) {
  //
  //   }
  // }
}

// user interface logic
$(document).ready(function() {
  $("form#base-text").submit(function(event) {
    event.preventDefault();
    var string = $("input#text-input").val();
    var result = seekLetters(string);
    console.log(result);
    // $(".year").text(year);
    //
    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }
    //
    // $("#result").show();
  });
});
