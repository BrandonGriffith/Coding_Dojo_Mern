const encode = (str) => {
    let current = str[0];
    let encodeStr = "";
    let count = 0;
    for(let i = 0; i <= str.length; i++){
        if(current == str[i]){
            count++;
        }else{
            encodeStr += current + count;
            count = 1;
            current = str[i];
        }
    }return encodeStr;
}


console.log(encode("aaabbbbcdd")) //"a3b4c1d2"
