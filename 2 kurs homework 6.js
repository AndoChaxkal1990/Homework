//  1. Given an array. Determine whether it consists only from unique elements or not.

function uniqueArray(arr) {
    return new Set(arr).size === arr.length ? true : false;
}



//  2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.

function evenNumberQuadraticSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        if(Math.sqrt(arr[i])%2===0){
            sum+=arr[i]
        }
    }
    return sum;
};



//  3. Check whether string is palindrome, or not.

function strPalindrome(str){
    let sentence=str.toLowerCase().split(' ').join('');
    for(let i=0; i<=sentence.length/2; i++){
        if(sentence[i]===sentence[sentence.length-i-1]){
            continue
        }else{
            return false
        }
    }
    return true
};


//  4. Given a word and a list of possible anagrams, select the correct sublist.

function anagrama(arr,str){
    let array=[];
    let word=str.toLowerCase().split('').sort().join('');
    for(let i=0; i<arr.length; i++){
        if(word===arr[i].toLowerCase().split('').sort().join('')){
            array.push(arr[i]);
        }
    }
    return array;
};