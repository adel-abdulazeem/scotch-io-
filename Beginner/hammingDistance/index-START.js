/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/


function hammingDistance(stringA, stringB) {
    // Code goes here
    let ham = 0
    if(stringA.length === stringB.length){
      for(let i = 0; i < stringA.length; i++){
        if(stringA[i] !== stringB[i]){
            ham++
          }
      }
      return ham
    } else {
      throw new Error('Strength do not have equal length')
    }
  }
  
  console.log(hammingDistance('rover', 'rivor'))


module.exports = hammingDistance