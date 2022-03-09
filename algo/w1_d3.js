const selectionSort = (arr)=>{
    let size = arr.length-1;
    for( let j = 0; j < size; j++){
        let bigIndex = 0;
        for(let x = 0; x <= size-j; x++){
            if(arr[x] > arr[bigIndex]) bigIndex = x;
        }
        [arr[size-j], arr[bigIndex]] = [arr[bigIndex], arr[size-j]]
        // let temp = arr[bigIndex];
        // arr[bigIndex] = arr[size-j];
        // arr[size-j] = temp;
    }console.log(arr);
    return arr;
}


let arr = [5,23,0,12,8,6];
selectionSort(arr);

