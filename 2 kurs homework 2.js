// 1. Write a function which receives an array and a number as arguments and returns a
//    new array from the elements of the given array which are larger than the given
//    number.

function numberLargeArray(arr,number){
    let result=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>number){
            result.push(arr[i])
        }
    }
    if(result.length===0){
        return '“Such values do not exist.”'
    }else{
        return result;
    }
};

// 2. Write a function, which receives two numbers as arguments and finds all numbers
//    between them such that each digit of the number is even. The numbers obtained should be
//    printed in a comma-separated sequence on a single line.

function ollCharactersEvenNumber(start, end){
    let result='';
    for(let i=start; i<=end; ++i){
        let res=0;
        let res1=0;
        for(let j=i; j>=1; j=(j-j%10)/10){
            res++
            if((j%10)%2===0){
                res1++
            }
        }
        if(res===res1){
            result+=i+','
        }
    }
    if(result===''){
        return '“Such numbers does not exist.”'
    }else{
        return result
    }
}

// 3. Given an array of numbers which is almost sorted in ascending order.  Find the index
//    where sorting order is violated.

function findIndex(arr){
    let result=-1
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            result=arr.indexOf(arr[i+1])
        }
    }
    return result
};

// 4. Given an array of integers, find the pair of adjacent elements that has the largest
//    product and return that product.

function adjacentElementsProduct(arr) {
    let result=[]
    for(let i=0;i<=arr.length-2;i++){
        result.push(arr[i]*arr[i+1])
        if(result[0]<result[i]){
            result[0]=result[i]
        }
    }
    return result[0]
};

// 5. Given an array of integers. All numbers are unique. Find the count of missing
//    numbers between minimum and maximum elements to make integers sequence.

function sumMissingNumber(arr) {
    let min
    let result=[]
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i]<arr[j]){
                min=arr[i]
                arr[i]=arr[j]
                arr[j]=min
            }
        }
    }

    for(let i=0; i<arr.length;i++){
        if(arr[i+1]-arr[i]!=1){
            for(let j=arr[i]+1; j<arr[i+1]; j++)
                result.push(j)
        }
    }
    return result.length;
}


// 6. Given an array consisting from the arrays of numbers (like a two-dimensional array).
//    Find sum of each row and print them as an array

function sumInsideArrey(arr){
    let result=[];
    for(let i=0; i<arr.length; i++){
        let sum=0;
        for(let j=0; j<arr[i].length; j++){
            sum+=arr[i][j]
        }
        result.push(sum)
    };
    return result
};


// 7. Given an array of integers. Write a function that return new array from first array,
//    where removed even numbers, and odd numbers was multiplied with new array length

function newArray(arr){
    let result=[];
    let array=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            array.push(arr[i])
        }
    }
    for(let i=0; i<array.length; i++){
        result.push(array[i]*array.length)
    }
    return result;
};
