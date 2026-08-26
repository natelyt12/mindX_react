// b1
export function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// b2
export function countOccurrence(arr, value) {
    let newarr = arr.filter((item) => item === value);
    return newarr.length;
}

// b3
export function removeDuplicates(arr) {
    let rmDuplicate = arr.filter((value, index) => arr.indexOf(value) === index);
    return rmDuplicate;
}

// b4
export function flattenArray(arr) {
    return arr.flat(Infinity);
}

// b5
export function isSymmetric(arr) {
    let reversedArr = [...arr].reverse();
    return JSON.stringify(arr) === JSON.stringify(reversedArr);
}

// b6
export function findSecondLargest(arr) {
    let uniqueArr = [...new Set(arr)];
    if (uniqueArr.length < 2) {
        return null;
    }
    uniqueArr.sort((a, b) => b - a); // sắp xếp giảm dần
    return uniqueArr[1];
}

// b7
export function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}

// b8
export function findMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let mostExpensive = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
        }
    }
    return mostExpensive;
}

// b9
export function groupByType(arr) {
    return arr.reduce((acc, obj) => {
        if (!acc[obj.type]) {
            acc[obj.type] = [];
        }
        acc[obj.type].push(obj.name);
        return acc;
    }, {});
}

// b10
export function isSubset(arr1, arr2) {
    return arr1.every((value) => arr2.includes(value));
}

// b11
export function findMaxkey(obj) {
    let maxKey = null;
    let maxValue = 0;
    for (let key in obj) {
        if (obj[key] > maxValue) {
            maxValue = obj[key];
            maxKey = key;
        }
    }
    return maxKey;
}

// b12
export function mergeObjSumValue(obj1, obj2) {
    let mergedObj = { ...obj1 };
    for (let key in obj2) {
        if (mergedObj.hasOwnProperty(key)) {
            mergedObj[key] += obj2[key];
        } else {
            mergedObj[key] = obj2[key];
        }
    }
    return mergedObj;
}

// b13
export function countElements(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (count[element]) {
            count[element]++;
        } else {
            count[element] = 1;
        }
    }
    return count;
}

// b14
export function cleanObject(obj) {
    let cleanedObj = {};
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            cleanedObj[key] = obj[key];
        }
    }
    return cleanedObj;
}

// b15
export function hasDuplicates(arr) {
    let uniqueArr = [...new Set(arr)];
    return uniqueArr.length !== arr.length;
}

// b16


// b17
export function uniqueValues(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// b18
export function isPermutation(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let sortedArr1 = [...arr1].sort();
    let sortedArr2 = [...arr2].sort();
    return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
}

// b19
export function findLongestString(arr) {
    if (arr.length === 0) {
        return null;
    }
    let longestString = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString;
}

// b20
export function intersection(arr1, arr2) {
    return arr1.filter((value) => arr2.includes(value));
}

// b21
export function filterByMinValue(arr, minValue) {
    return arr.filter((value) => value >= minValue);
}

// b22
export function findLongestValue(obj) {
    let longestValue = null;
    for (let key in obj) {
        if (!longestValue || obj[key].length > longestValue.length) {
            longestValue = obj[key];
        }
    }
    return longestValue;
}