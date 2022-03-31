const dec2hex = (num) => {
    let result = '';
    const options = '0123456789ABCDEF';
    while (num > 0) {
        let x = num % 16;
        result = options.charAt(x) + result;
        num = Math.floor(num / 16);
    }return result || '0';
}

console.log(dec2hex(58));
console.log(dec2hex(10));
console.log(dec2hex(15));
console.log(dec2hex(0));
