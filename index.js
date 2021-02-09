// Code your solution here
function findMatching(arr, str) {
    let driver = arr.filter(d => d.toLowerCase() === str.toLowerCase())
    return driver
}

function fuzzyMatch(arr, str) {
    let driver = arr.filter(d => d.charAt(0) === str.charAt(0))
    return driver
}

function matchName(arr, str) {
    let driver = arr.filter(d => d.name === str)
    return driver
}