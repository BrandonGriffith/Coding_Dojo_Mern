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