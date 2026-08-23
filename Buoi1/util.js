// b1
export function productInfo(bookName, price) {
    return `Sản phẩm: ${bookName}, Giá: ${price} VND`
}

// b2
export function greet(name) {
    return `Xin chao, ${name}`
}

// b3, b7
export function sumUpTo(...numArray) {
    let sum = 0
    for (let i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i]
    } 
    return sum
}

// b4
export function square(number) {
    return number ** 2
}

// b5
export function isEven(number) {
    return number % 2 === 0 ? true : false
}

// b6
export function firstElementinArray(array) {
    return array[0]
}

// b8 {user object: name, age}
export function showname_obj(userObj) {
    return `Name: ${userObj.name}, age: ${userObj.age}`
}

// b9
export function showName() {
    const people = [{ name: 'An' }, { name: 'Bình' }, { name: "Đức" }];
    return people.map(person => person.name).join(", ");
}

// b10
export function stringLength(string) {
    return string.length
}

// b11
export function uppercaseString(string) {
    return string.toUpperCase()
}

// b12
export function formatCurrency(amount) {
    return `${amount.toLocaleString("vi-VN")} VND`
}

// b13
export function maxNumber(...numArray) {
    return Math.max(...numArray)
}

// b14
export function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// b15
export function repeatString(string, repeat_time) {
    let processed = string + " "
    return processed.repeat(repeat_time)
}

// b16
export function sumOdd(array) {
    return array.filter(number => number % 2 !== 0).reduce((sum, number) => sum + number, 0)
}

// b17
export function sumGreaterThan(array, n) {
    return array.filter(number => number > n).reduce((sum, number) => sum + number, 0)
}

// b18
export function formatDate(date) {
    const [year, month, day] = date.split("-")
    return `${day}/${month}/${year}`
}

// b19
export function firstThree(array) {
    return array.slice(0, 3)
}

// b20
export function containsChar(string, character) {
    return string.includes(character)
}

// b21
export function mergeArrays(firstArray, secondArray) {
    return [...firstArray, ...secondArray]
}

// b22
export function countOccurrences(array, item) {
    return array.filter(element => element === item).length
}

// b23
export function filterOdd(array) {
    return array.filter(number => number % 2 !== 0)
}

// b24
export function greaterThan(array, value) {
    return array.filter(number => number > value)
}

// b25
export function factorial(number) {
    let result = 1
    for (let i = 1; i <= number; i++) {
        result = result * i
    }
    return result
}

// b26
export function separateEvenOdd(array) {
    return {
        even: array.filter(number => number % 2 === 0),
        odd: array.filter(number => number % 2 !== 0)
    }
}

// b27
export function sortAsc(array) {
    return [...array].sort((a, b) => a - b)
}

// b28
export function sumEvenIndex(array) {
    return array.filter((number, index) => index % 2 === 0).reduce((sum, number) => sum + number, 0)
}

// b29
export function multiplyByTwo(array) {
    return array.map(number => number * 2)
}

// b30
export function arrayToString(array) {
    return array.join("")
}

