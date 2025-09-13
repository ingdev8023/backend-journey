var addTwoNumbers = function(l1, l2) {
    let list1Rev = l1.reverse().join("")
    let list2Rev = l2.reverse().join("")
    let result = (parseInt(list1Rev,10) + parseInt(list2Rev,10)).toString().split("").reverse() 
        return  result
};
let l7 = [9,9,9,9,9,9,9]
let l6 = [9,9,9,9]
let l4 = [2,4,3]
let l5 = [5,6,4]
console.log(addTwoNumbers(l7,l6))

// I used arrays bc in JS there are no linked list unless I create an specific type of object.