let str = "hi my name is nicholas"

function reverseString(str) {
  // type your code here
  let arr = str.split('')
  let reversed = []
  for (let i = arr.length; i >0; i --){
    reversed.push(arr[i])
  }
return reversed.join("")
 
  // return reversed
  // .join("")
}

reverseString('hi')



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//create a new blank string
//use a for loop iterating over the letters of the original string, starting from
//the end and decreimenting, putting each letter into the new string in reverse
//order