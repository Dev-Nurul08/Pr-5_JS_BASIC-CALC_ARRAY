let arr = [12, 5, 78, 2, 34, 64];
console.log(`Unsorted Array : ${arr}`);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(`Sorted Array : ${arr}`);