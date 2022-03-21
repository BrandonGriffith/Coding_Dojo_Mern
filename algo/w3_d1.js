const intersect = (arr1, arr2) => {
    const result = [];
    let [x,y] = [0,0];
    while (x < arr1.length && y < arr2.length) {
        if (arr1[x] < arr2[y]) x++;
        if (arr1[x] > arr2[y]) y++;
        if (arr1[x]===arr2[y])
        {result[result.length] = arr1[x], x,y++}
    }return result;
}
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 4, 6, 7, 8];
console.log(intersect(arr1, arr2));





const unionSortedArrays = (arr1, arr2) => {
    const result = [];
    let [i,j] = [0,0];
        while ( i < arr1.length || j < arr2.length){
            if (arr1[i] < arr2[j] || !arr2[j]){
                result[result.length] = arr1[i];
                i++;
            }else{
                result[result.length] = arr2[j];
                j++;
            }
        }return result;
}
console.log(unionSortedArrays([0,3,4,31], [4,6,30]));








// const intersect2 = (arr1, arr2) => {
//     let obj = {};
//     const result = [];
//     let [x,y,count] = [0,0,0];
//     while (x < arr1.length && y < arr2.length) {
//         if(arr1[x] in obj) count = obj[arr1[x]];
//         if (arr1[x] < arr2[y]) x++;
//         if (arr1[x] > arr2[y]) y++;
//         if (arr1[x]===arr2[y]){obj[arr1[x]] = count+1, x,y++}
//         count = 0;
//     }for (let [key,value] of Object.entries(obj)){
//         for (x = 0; x < value; x++)
//             result.push(key*1);
//     }return result;
// }
// console.log(intersect2(arr1, arr2));

