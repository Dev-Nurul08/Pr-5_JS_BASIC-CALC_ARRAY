let arr = [47, 2, 85, 125, 63, 99, 9];
let maxIndex = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[maxIndex] < arr[i]) {
        maxIndex = i;
    }
}
console.log(`Maximum Value is : ${arr[maxIndex]}`);