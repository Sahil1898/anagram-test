function checkString(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    const chArr1 = str1.split("");
    const chArr2 = str2.split("");
    const chCount1 = new Map();
    const chCount2 = new Map();

    let anagram = true;
    chArr1.forEach((ch) => {
        if(chCount1.has(ch)){
            chCount1.set(ch, chCount1.get(ch) + 1);
        } else{
            chCount1.set(ch, 1);
        }
    });

    chArr2.forEach((ch) => {
        if(chCount2.has(ch)){
            chCount2.set(ch, chCount2.get(ch) + 1);
        } else{
            chCount2.set(ch, 1);
        }
    });

    chCount1.forEach((value, key) => {
        if(!chCount2.has(key) || chCount2.get(key) != value){
            anagram = false;
        }
    });

    return anagram;
}

console.log("Is Anagram String >>> ", checkString("abb", "aba"));