class StringComparator{

    static compararStrings(str1:string, str2:string):boolean{
        const str1_minuscula = str1.toLowerCase();
        const str2_minuscula = str2.toLowerCase();

        if(str1_minuscula === str2_minuscula){
            return true;
        } else{
            return false;
        }
    }
}

console.log(StringComparator.compararStrings("Hello", "hello") ) ; // true
console.log(StringComparator.compararStrings("camelCase", "CAMELcase") ) ; // true
console.log(StringComparator.compararStrings("TypeScript", "typescript") ) ; // true
console.log(StringComparator.compararStrings("Different", "Strings") ) ; // false