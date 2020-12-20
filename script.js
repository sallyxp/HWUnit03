var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9"];
var special = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"; 

var validRequest = false;
var validUpper = false;
var validLower = false;
var validSpecial = false;
var validNumbers = false;
var runningTotal = 0;
var uppercase, lowercase, numbers, special = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  alert("Welcome to the Password Generator! \n You may tailor your new password by \n - Number of letters, \n - Upper/lower case, \n - Inclued special characters.");
  var passwordLength = prompt("Please enter a numeric value for password length between 8 and 128.");

   do {

    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      alert("this is okay");
      var runningTotal = passwordLength;
      validRequest == true;
      break;
     }  
    else {
    var passwordLength = prompt("Please enter a numeric value for password length between 8 and 128.");
    }
    var uppercase = confirm("Would you like to use uppercase letters?");

  }     //do
  while (validRequest == true);

  do {
  //var uppercase = prompt("How many uppercase characters? Enter 0 for none.");
  var validRequest = false;
  var newArray = [];
  var allChars = "";
  var i = 0;
    //if (parseInt(uppercase) > 0 ) {
      //validUpper == true;
      //var runningTotal = parseInt(runningTotal) - parseInt(uppercase);
      //alert("There are " + runningTotal + " characters remaining to allocate.");
      var validUpper = confirm("Would you like to use uppercase letters?");
      if (validUpper ) {
        newArray.push("upper");
        var allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
         }
      var validLower = confirm("Would you like to use lower letters?");
      if (validLower ) {
       i = i + 1;
       newArray.push("lower");
       var allChars = allChars + 'abcdefghijklmnopqrstuvwxyz';
      }
      var validNumbers = confirm("Would you like to use numbers?");
      if (validNumbers) {
        i = i + 1;
        newArray.push("number"); 
        var allChars = allChars + '0123456789';
        //newArray.push(i); 
      }
      var validSpecial = confirm("Would you like to use special characters?");
      if (validSpecial ) {
        i = i + 1;
        newArray.push("special");        //newArray.push(i); 
        var allChars = allChars + '0123456789';
      }
      if (validUpper !== true && validLower !== true && validNumbers !== true && validSpecial !== true) {
        alert("You must select at lease one character type.");
      }
      else {
        alert("in here");
        break;
        }
      
  } // do
  while (validUpper !== true && validLower !== true && validNumbers !== true && validSpecial !== true);
  

function generateNewPassword() {
  var password = "";

  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");

}

//combine the arrays depending if they have been selected
var combinedArray = lower.concat(upper, number, special); 

   
}  //end of function
   
//stuff in original

function buildPassword() {
  //need to get numbers from the 3 arrays lowercase, uppercase and special
  //then randomise
  //then got to set password to screen in write password below.
  
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
