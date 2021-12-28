function checkString(str1,str2){
    if (str1.length != str2.length){
        return false;
    }

    const chArr1 = str1.split("");
    const chArr2 = str2.split("");
    
    chArr1.sort();
    chArr2.sort();

    for (let i = 0; i < str1.length; i++){
        if (chArr1[i] != chArr2[i]){
            return false;
        }
    }

    return true;
}

console.log("Is Anagram String >>> ", checkString("bab", "aab")); 