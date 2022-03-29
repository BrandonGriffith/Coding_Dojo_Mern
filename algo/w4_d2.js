const numToBinary = (num) => {
    let result = "";
    while(num !== 0){
        let x = num % 2;
        num = Math.floor(num/2);
        result = x + result;
    }return result;
}
console.log(numToBinary(23)); //10111
console.log(numToBinary(22)); //10110
