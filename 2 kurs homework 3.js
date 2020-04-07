// 1. Write a recursive function to determine whether all digits of the number are odd or not.

function ollCharactersOddNumber(n){
    if(n%2!=0){
        return n>=10? ollCharactersOddNumber((n-n%10)/10):true
    }else{
        return false
    }

}


// 2. Given an array of numbers. Write a recursive function to find its minimal positive
//    element. (if such element does not exist, return -1)․

function  smallPositiveNumber(arr){
    arr.sort((a,b)=>a-b)
    if(arr.length===0){
        return -1
    }else if(arr[0]<0){
        return smallPositiveNumber(arr.slice(1,arr.length))
    }else{
        return arr[0]
    }
}


// 3. Write a recursive function which receives a number as arguments and returns the
//    fibonacci sequence as array.

function fibonacci(n){
    let arr;
    if(n===0){
        return arr=[]
    }else if(n===1){
        return arr=[1];
    }else if(n===2){
        return arr=[1,1];
    }else{
        arr=fibonacci(n-1)
        arr.push(arr[arr.length-1]+arr[arr.length-2])
        return arr
    }
}


// 4. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
//    function that concats arrays).

function nestedArray(arr){
    let d=[]
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            d=d.concat(nestedArray(arr[i]))
        }else{
            d.push(arr[i])
        }
    }
    return d
}


// 5. Given a number. Write a function that calculates its sum of the digits and if that sum
//    has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
//    return the result.

function number(n){
    let sum=0;
    for(let i=n; i>=1; i=(i-i%10)/10){
        sum+=i%10;
    }
    return sum<10?sum:number(sum)
}
