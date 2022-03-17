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
function encode2(str) {
    let output = "";
    let obj = {};
    for (let x = 0; x < str.length; x++){
        if(str[x] in obj){
            obj[str[x]] += 1;
        }else{
            obj[str[x]] = 1;
        }
    } 
    for (const key in obj) {
        // console.log(`${key}: ${obj[key]}`);
        output += key + obj[key];
    }console.log(obj);
    return output;
}
const encode3 = (str) => {
    let result = "";
    let map = new Map;
    for (let i = 0; i < str.length; i++){
        if(map.has(str[i])){
            let count = map.get(str[i]);
            map.set(str[i], count+1);
        }else{
            map.set(str[i], 1);
        }
    }for (let [key, value] of map){
        result += key + value;
    }console.log(map);
    return result;
}
const decode = (str) => {
    let result = "";
    let numStr = "";
    let current = str[0];
    for (let i = 0; i <= str.length; i++){
        if (!isNaN(str[i])){
            numStr += str[i];
        }else{
            result += current.repeat(numStr);
            numStr = "";
            current = str[i];
        }
    }return result;
}



console.log(encode2("aaabbbbcdd")); //"a3b4c1d2"
console.log(encode2("addbbdccdaabbccbaabcdaad"));
console.log(encode3("aaabbbbcdd")); //"a3b4c1d2"
console.log(encode3("addbbdccdaabbccbaabcdaad"));
console.log("---------------------------------");
console.log("Encoded ===> ",encode("aaabbbbcdd")); //"a3b4c1d2"
console.log("Decoded ===> ",decode("a3b4c1d2")); //"aaabbbbcdd"
