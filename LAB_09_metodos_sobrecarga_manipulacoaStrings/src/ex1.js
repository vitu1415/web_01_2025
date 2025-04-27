var StringComparator = /** @class */ (function () {
    function StringComparator() {
    }
    StringComparator.compararStrings = function (str1, str2) {
        var str1_minuscula = str1.toLowerCase();
        var str2_minuscula = str2.toLowerCase();
        if (str1_minuscula === str2_minuscula) {
            return true;
        }
        else {
            return false;
        }
    };
    return StringComparator;
}());
console.log(StringComparator.compararStrings("Hello", "hello")); // true
console.log(StringComparator.compararStrings("camelCase", "CAMELcase")); // true
console.log(StringComparator.compararStrings("TypeScript", "typescript")); // true
console.log(StringComparator.compararStrings("Different", "Strings")); // false
