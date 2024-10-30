/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   // Code goes here
   return text.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}



module.exports = capSentence