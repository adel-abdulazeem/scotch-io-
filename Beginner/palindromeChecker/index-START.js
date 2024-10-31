/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
    // Code goes here
    // let arr = text.toLowerCase().split('')
    // return arr.every((el,i) => el === arr[arr.length - i - 1] )
    for(let i = 0; i < text.length/2; i++){
        if(text[i] !== text[text.length - i - 1]){
            return false
        }
    }
    return true
}

module.exports = palindromeChecker;

