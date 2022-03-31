const biToDec = bi => {
    let results = 0;
    for (let i=1; i<=bi.length; i++) {
        results += (parseInt(bi[bi.length-i])
                    *(Math.pow(2,i-1)));
    }console.log(results);
    return results;
}

biToDec("111010") //58
biToDec("11")
