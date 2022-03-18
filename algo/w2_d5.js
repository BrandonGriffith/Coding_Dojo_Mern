// const intersect = (arr1, arr2) => {
//     let output = [];
//     let x = arr1.length-1;
//     let y = arr2.length-1;
//     while (x,y >= 0) {
//         if (arr1[x] > arr2[y]) x--;
//         if (arr1[x] < arr2[y]) y--;
//         if (arr1[x]===arr2[y]){output.unshift(arr1[x]), x,y--}
//     }return output;
// }


// let arr1 = [1, 2, 2, 3, 4];
// let arr2 = [2, 2, 4, 6, 7, 8];
// console.log(intersect(arr1, arr2));




/*

input: "sweet potato"

output: "swet poa"

*/


function dedupeString(str){
    let output = "";
    let map = new Map;
    for (i = 0; i < str.length; i++) {
        map.set(str[i], i);
    }for (let [key, _value] of map) {
        output += key;
    }return output;
}


console.log(dedupeString("sweet potato")); //"swet poa"
