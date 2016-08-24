/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str){
    var arr1 = [];
    var arr2 = [];
    var missing = [];
    for(var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++){
        arr1.push(i);
    }
    for(var j = 0; j < str.length; j++){
        arr2.push(str.charCodeAt(j));
    }
    for(var k = 0; k < arr1.length; k++){
        if (arr2.indexOf(arr1[k]) === -1){
            missing.push(arr1[k]);
        }
    }
    if(missing.length < 1){
        return undefined;
    }else{
        return String.fromCharCode.apply(null, missing);
    }
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");
fearNotLetter("yz");
