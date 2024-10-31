/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


function longestWord(str){
    // return str.split(' ').sort((a,b) => b.length - a.length)[0]

    let arr = str.split(' ')
    // let maxLength = 0
    // let longestChar = ''

    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i].length > maxLength){
    //         maxLength = arr[i].length
    //         longestChar = arr[i]
    //     }
    // }
    // return longestChar

    return arr.reduce((maxLengthWord, currentWord) => {
        if(currentWord.length > maxLengthWord.length){
            return currentWord
        } else {
            return maxLengthWord
        }
    }, '')
  }


module.exports = longestWord