/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//func takes str of text => reversed format of this text format
// str, text, always valid, it will be never empty
// return reversed form of this text foarmat
// reverseString('abc') // output = 'cba'
//
function reverseString(text) {
    // return text.split('').reverse().join('')// time 1.595s
    // return [...text].reverse().join('') // time = 1.602s //spread operator 
    // let result = ''
    // for(let i = text.length - 1; i >= 0; i--){
    //     result += text[i]
    // }
    // return result // time = 1.606
    // let res = ''
    // for(let char of text){
    //     res = char + res
    // }
    // return res time = 1.669s
    // if( text === ''){
    //     return ''
    // }else{
    //    return  reverseString(text.substr(1)) + text[0]
    // }// time = 1.578
   return  text.split('').reduce((acc,char) => char + acc, '')// time = 1.579s
}

function reverse(str){
    let res = ''
    for(let i = str.length -1; i >= 0; i--){
        res += str[i]
    }
    return res
}

module.exports = reverseString

