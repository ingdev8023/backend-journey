var twoSum = function(nums, target) {
    let resultIndex = []
    nums.forEach((x,i) =>{
        for(let j = 1; j < nums.length; j++){
            if(x + nums[j] === target && resultIndex.length < 2 && i!==j){
                resultIndex.push(i,j)                               
            }
        } 

    })
   return resultIndex
};

let input = [3,2,4]
let target = 6

console.log(twoSum(input,target))

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]