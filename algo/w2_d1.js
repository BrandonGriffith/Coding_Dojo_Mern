// const partition = (arr, l, r) => {
//     pivot = arr[r];
//     i = l - 1;
//     for (let j = 0; j<r-1; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }
//     [arr[i+1], arr[r]] = [arr[r], arr[i+1]];
//     return i+1;
// }

// const quickSort = (arr, l, r) => {
//     if (l >= r) return;
//     let p = partition(arr, l ,r);
//     quickSort(arr, l, p-1);
//     quickSort(arr, p+1, r);
//     return arr;
// }

// console.log(quickSort([5,6,1,2,3,7,8,9], 0, 7));


const stringArray = (str) => {
    let word = "";
    let arr = [];
    for (let i = 0; i<str.length; i++) {
        if (str[i] !== " ") {
            word += str[i];
        }else{
            if (word !== "") {
                arr.push(word);
                word = "";
            }
        }
    }return arr;
}


console.log(stringArray("  hello hey how   you   doing?   "));
