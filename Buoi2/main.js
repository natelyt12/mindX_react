import * as utils from "./util.js";

console.log(utils.sumArray([1, 2, 3, 4, 5]));
console.log(utils.countOccurrence([1, 2, 3, 4, 5, 1, 1], 1));
console.log(utils.removeDuplicates([1, 2, 3, 4, 5, 1, 1]));
console.log(utils.flattenArray([1, [2, 3], [4, [5]]]));
console.log(utils.isSymmetric([1, 2, 3, 2, 1]));
console.log(utils.isSymmetric([1, 2, 3, 4, 5]));
console.log(utils.findSecondLargest([1, 2, 3, 4, 5]));
let products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
];
console.log(utils.sortProductsByPrice(products));
console.log(utils.findMostExpensiveProduct(products));
let arr = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];
console.log(utils.groupByType(arr));
console.log(utils.isSubset([1, 2], [1, 2, 3, 4, 5]));
let obj = { a: 5, b: 10, c: 3 };
let obj2 = { a: 2, b: 3, d: 4 };
console.log(utils.findMaxkey(obj));
console.log(utils.mergeObjSumValue(obj, obj2));
console.log(utils.countElements([1, 2, 3, 4, 5, 1, 1]));
console.log(utils.cleanObject({ a: 1, b: null, c: undefined, d: 4 }));
console.log(utils.hasDuplicates([1, 2, 3, 4, 5, 1, 1]));
console.log(utils.uniqueValues([1, 2, 3], [3, 4, 5]));
console.log(utils.isPermutation([1, 2, 3], [3, 2, 1]));
console.log(utils.findLongestString(['apple', 'banana', 'cherry']));
console.log(utils.intersection([1, 2, 3], [3, 4, 5]));
console.log(utils.filterByMinValue([1, 2, 3, 4, 5], 3));
console.log(utils.findLongestValue({ a: 'apple', b: 'banana', c: 'cherry' }));