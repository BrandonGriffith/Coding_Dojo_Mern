// function merge(arr, l, m, r){
//     let n1 = m - l + 1;
//     let n2 = r - m;
//     let L = new Array(n1); 
//     let R = new Array(n2);
//     for (let i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (let j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];
//     let i = 0;
//     let j = 0;
//     let k = l;
//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i];
//             i++;
//         }
//         else {
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }
// function mergeSort(arr,l, r){
//     if(l>=r){
//         return;
//     }
//     let m =l+ parseInt((r-l)/2);
//     mergeSort(arr,l,m);
//     mergeSort(arr,m+1,r);
//     merge(arr,l,m,r);
//     return arr;
// }

// let arr = [ 12, 11, 13, 5, 6, 7 ];
// let arr_size = arr.length;
// console.log(mergeSort(arr, 0, arr_size - 1));





const combineSortedArrays = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}


console.log(combineSortedArrays([1,3,5,5,6], [2,3,4,9])) //[1,2,3,3,4,5,5,6,9]

console.log(combineSortedArrays([1,3,3,5,9], [0,1,4])) //[1,2,3,3,4,5,5,6,9]


