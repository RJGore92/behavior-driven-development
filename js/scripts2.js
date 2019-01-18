// business logic
var reLetters = (/[a-z]/i)
var reVowels = (/[aeiou]/i)

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var vowelsFirst = ["a", "e", "i", "o", "u"];
var vowelsSecond = ["a", "e", "i", "o", "u", "y"];
var consonantsFirst = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var consonantsSecond = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
var specialCondition = "qu";

function translateConfimed(confirmCheck)
{
  if (confirmCheck == true) {
    $(".confirmedTranslate").text("The following string is your input translated to Pig Latin")
  }
  else {
    $(".confirmedTranslate").text("The string you input cannot be translated to Pig Latin")
  }
}

// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// function iteration: track letters of single words
function seekLetters(string) {
  var fullStringArray = string.split(" ");
  var finalStringSeriesArray = [];
  var finalString;
  console.log(fullStringArray);
  wordTranslator:
  for (var wordTarget = 0; wordTarget < fullStringArray.length; wordTarget++) {
    var stringToCheck = fullStringArray[wordTarget].toLowerCase();
    var stringToSplice = [];
    var stringIndexToCut = 0;
    var finalWord;
    console.log(stringToCheck);
    var stringSplit = stringToCheck.split("");
    console.log(stringSplit);
    for (var i = 0; i < numbers.length; i++) {
      if (stringSplit[0] == numbers[i]) {
        finalWord = stringToCheck;
        translateConfimed(false);
        finalStringSeriesArray.push(finalWord);
        continue wordTranslator;
        // return finalWord;
      }
    }
    vowelSeeker:
    for(var i = 0; i <= vowelsFirst.length; i++) {
      if (stringSplit[0] == vowelsFirst[i] && i != 5) {
        if (stringSplit.length > 1) {
          finalWord = stringToCheck.concat("way");
          translateConfimed(true);
          finalStringSeriesArray.push(finalWord);
          continue wordTranslator;
          // return finalWord;
        }
        else {
          finalWord = stringToCheck.concat("ay");
          translateConfimed(true);
          finalStringSeriesArray.push(finalWord);
          continue wordTranslator;
          // return finalWord;
        }
      }
      else if (i == 5) {
        stringIndexToCut++;
        break vowelSeeker;
      }
    }
    consonantSecondSeek:
    for (var i = 1; i < stringSplit.length; i++) {
      for (var j = 0; j <= consonantsSecond.length; j++) {
        if (stringSplit[i] == consonantsSecond[j] && j != 20) {
          stringIndexToCut++;
          continue consonantSecondSeek;
        }
        else if (j == 20) {
          if (stringSplit[i-1] == "q" && stringSplit[i] == "u") {
            stringIndexToCut++;
            for (var l = 0; l < stringIndexToCut; l++) {
              stringToSplice.push(stringSplit[0]);
              stringSplit.splice(0, 1);
            }
            var finalPreSplice = stringSplit.concat(stringToSplice);
            var finalPostSplice = finalPreSplice.join("");
            finalWord = finalPostSplice.concat("ay");
            finalStringSeriesArray.push(finalWord);
            translateConfimed(true);
            continue wordTranslator;
            // return finalWord;
          }
          else {
            for (var l = 0; l < stringIndexToCut; l++) {
              stringToSplice.push(stringSplit[0]);
              stringSplit.splice(0, 1);
            }
            var finalPreSplice = stringSplit.concat(stringToSplice);
            var finalPostSplice = finalPreSplice.join("");
            finalWord = finalPostSplice.concat("ay");
            finalStringSeriesArray.push(finalWord);
            translateConfimed(true);
            continue wordTranslator;
            // return finalWord;
          }
        }
      }
    }
  }
  finalString = finalStringSeriesArray.join(" ")
  console.log(finalString)
  return finalString;

}

// user interface logic
$(document).ready(function() {
  $("form#base-text").submit(function(event) {
    event.preventDefault();
    var string = $("input#text-input").val();
    var result = seekLetters(string);
    console.log(result);
    $(".translated").text(result);

    $("#result").show();
  });
});
