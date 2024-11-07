/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/


// let letters = 'abcdefghijklmnopqrstuvwxyz'
// const santize = text => text.toLowerCase().split('').filter(el => letters.includes(el)).sort().join('')

// return santize(stringA) === santize(stringB)
// let charCount = {}
// if(stringA.length !== stringB.length) return false
// for(char of stringA.toLowerCase()){
//     charCount[char] = charCount[char] + 1 || 1
// }

// for(char of stringB.toLowerCase()){
//     if(!charCount[char]) return false
//         charCount[char]--
// }
//     return true
// }
function isAnagram(stringA, stringB) {

function createCharMap(text){
    let charMap = {}
    for(let char of text){
     charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

let stringAMap = createCharMap(stringA)
let stringBMap = createCharMap(stringB)

// if(stringA.length === stringB.length){
//     for(let char in stringAMap){
//         if(stringAMap[char] !== stringBMap[char]){
//             return false
//         }
//     }
//     return true

// } else {
//     return false
//  }
return stringBMap

}
console.log(isAnagram('listen', 'silent'))

module.exports = isAnagram