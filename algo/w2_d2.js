const isRotation = (str1, str2) => {
    if(str1.length != str2.length){
        console.log(false);
        return false;
    }
    for(let i = 0; i < str1.length; i++){
        if(rotateString(str1, i) == str2){
            console.log(true);
            return true;
        }
    }console.log(false);
    return false;
}



const rotateString = (str,num) => {
    let rStr = "";
    num = num % str.length;
    for(let i = num; i > 0; i--){
        rStr = rStr + str[str.length-i];
    }
    for(let x = 0; x < str.length-num; x++){
        rStr = rStr + str[x];
    }
    return rStr;
}



isRotation("good morning USA",rotateString("good morning USA", 3));
isRotation("good morning USA",rotateString("good morning USA", 5));
isRotation("good morning USA",rotateString("good morning USA", 10));
isRotation("good morning USA",rotateString("good morning USA", 25));
isRotation("good morning USA","USA number one");