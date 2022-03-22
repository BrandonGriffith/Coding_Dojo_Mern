// let arr = ["1","2","3","4","5"];
// let endArr = arr.length-1;
// arr.push("6");
// arr[0]=arr[-1];
// console.log(arr);
// let newStr = "hello my one name is bob!!!";
// let revStr = [...newStr].reverse().join('');
// console.log(revStr);
// revStr = [...revStr].reverse().join('');
// console.log(revStr);
// console.log([...revStr].reverse().reverse());

const mergeSortedArrays = (arr1, arr2) => {
    const result = [];
    let [i,j] = [0,0];
        while ( i < arr1.length || j < arr2.length){
            if (arr1[i] < arr2[j] || !arr2[j]){
                result.push(arr1[i]);
                i++;
            }else{
                result.push(arr2[j]);
                j++;
            }
        }console.log(result);
    return result;
}
mergeSortedArrays([0,3,4,31], [4,6,30]);


let arr = [2,3,5,1,3,6,2,3,5,6,3,2,34]
const reCur = (arr) => {
    let map = new Map;
    let firstTwo = 2;
    for(let i = 0; i < arr.length; i++){
        if (map.has(arr[i])) {
            let count = map.get(arr[i]);
            map.set(arr[i], count+1);
            firstTwo--;
            if (firstTwo === 0) {
                return Array.from(map.keys()).slice(0,2); }
        }else map.set(arr[i], 1);
    }console.log(map);
    
}
console.log(reCur(arr));
