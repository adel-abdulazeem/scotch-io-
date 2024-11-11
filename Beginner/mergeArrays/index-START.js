/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    // return [...new Set([...jointArray])]

    // return jointArray.reduce((acc,c) => {
    //     if(acc.includes(c)){
    //         return acc
    //     } else {
    //         return [...acc, c]
    //     }
    // }, [])

    return jointArray.filter((el,i) => jointArray.indexOf(el) === i)
}
// [1,2,1,3]

module.exports = mergeArrays