let arr = [56, 18, 35, 77, 98, 91, 88];
console.log(`Array is : ${arr}`);
let target = 47;
const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}

let result = binarySearch(arr, target);
if (result != -1) {
    console.log(`${target} is found at ${result} index.`);
}
else {
    console.log(`${target} is not found.`);
}