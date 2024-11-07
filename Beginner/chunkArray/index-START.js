/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    let result = []

    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
    // for(let i = 0; i < array.length; i += size){
    //     let chunk = array.slice(i, size + i)
    //     result.push(chunk)
    // }
    // let arrayCopy = [...array]
    // while(arrayCopy.length > 0){
    //     result.push(arrayCopy.splice(0,size))
    // }
    // for(let val of array){
    //     let lastArray = result[result.length -1]
    //     if(!lastArray || lastArray.length === size){
    //         result.push([val])
    //     } else {
    //         lastArray.push(val)
    //     }
    // }

    return result
}


module.exports = chunkArray


// [[1,2,3,4,5], ...chunkArray([6,7,8,9,10,11,12,13], size)] 