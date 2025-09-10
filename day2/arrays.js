function removingDuplicate (array){
    let result = []
    array.forEach((x)=> {
        if(result.indexOf(x) < 0) {
        result.push(x)
        }     
 })
    return result
}


let testArray= [1,1,1,1,2,3,4,4,4,7,8,1,9,5]

console.log(removingDuplicate(testArray))


function flatArray (array){
    let result = array.flat(2)

    return result
}

let testArray2 = [1,[2,[3]],[5]]

console.log(flattenedArray(testArray2))