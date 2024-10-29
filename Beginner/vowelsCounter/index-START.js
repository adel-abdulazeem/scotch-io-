/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let res = text.match(/[aeiou]/gi)
    // let vowel = 'aeiou'
    // let count = 0
    // for(let char of text.toLowerCase()){
    //     if(vowel.includes(char)){
    //         count++
    //     }
    // }
    // return count
    if(res){
        return res.length
    } else{
        return 0
    }
    
}


module.exports = vowelsCounter;
