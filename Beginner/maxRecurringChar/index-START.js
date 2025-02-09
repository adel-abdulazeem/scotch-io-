/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//func takes str of letters and return the letter with max occurance
// str of letters, always valid 
// str of letter with max occurance
// maxRecurringChar('aabacada') // will return 'a'

function maxRecurringChar(text) {
    // Code goes here
    // declare an obj = {}
    // declare count var = 0
    // then loop through the input to reassign the obje then return  
    // then loop through the object to return the key with max value
    let obj = {}
    let maxChar = ''
    let maxVal = 0
    for(let char of text){
        obj[char] = obj[char] + 1 || 1
    }

    for(let char in obj){
        if(obj[char] > maxVal){
            maxVal = obj[char]
            maxChar = char
        }
    }
        return obj

    // let keys = Object.keys(obj)
    // let charValues = Object.values(obj)
    // let maxValue = Math.max(...charValues)
    // return keys[charValues.indexOf(maxValue)]// slower than for in iteration
}

console.log(maxRecurringChar('aabacada'))// a 

module.exports = maxRecurringChar;

