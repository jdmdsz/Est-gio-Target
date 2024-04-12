function inverterString(str) {
    let strInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }
    return strInvertida;
}


let str = "Target";
console.log(inverterString(str)); 

