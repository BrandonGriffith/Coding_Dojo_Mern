function bubbleSort(arr){
    let size = arr.length-1;
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }size--;
    }console.log(arr);
    return arr;
}

bubbleSort([5,23,0,12,8,6]); //[0,5,6,8,12,23]

