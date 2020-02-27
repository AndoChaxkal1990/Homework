// 1. Given a number n ( n > 0 ). Print Fibonacci series up to n.

function Fibonacci(n){
    let fib=[]
    fib[0]=0
    fib[1]=1
    for(let i=2;;i++){
        if(n>fib[i-2]+fib[i-1]){
            fib[i]=fib[i-2]+fib[i-1];
        }else{
            break;
        }
    }
    return fib;
}

// 2. Insert a number. Calculate product and sum of the digits of the number. If product is
//    divisible by the sum, print the quotient, otherwise print the remainder.

function Number_product_sum(number){
    let arr=[]
    let product=1
    let sum=0
    if(number===0){
        return 'Cannot calculate';
    }else{

        for(let i=number;i>=1;i=(i-i%10)/10){
            arr.push(i%10);
        }
        for(let i=0;i<arr.length;i++){
            product*=arr[i];
            sum+=arr[i];
        }
        if(product%sum===0){
            return `Quotient is ${product/sum}`;
        }else{
            return  `Remainder is ${product%sum}`;
        }
    }
}

// 3. Given an array of numbers. Find the maximum and minimum elements in array.
//    Calculate their difference and check is there such an element in the array or not.

function max_min(arr){
    for(let i=0;i<arr.length; i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let newArray=arr[j];
                arr[j]=arr[i];
                arr[i]=newArray
            }
        }
    }
    let d='false'
    let tar=arr[arr.length-1]-arr[0]
    for(let i=0;i<arr.length;i++){
        if(tar===arr[i]){
            d='true'
        }
    }
    return d;
}

// 4.  Array_second_max_index

function Array_second_max_index(arr){
    let max=arr[0]
    let second_max=arr[0]
    for(let i=1; i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    if(arr.indexOf(max)===0){
        second_max=arr[1]
        for(let j=1;j<arr.length;j++){
            if(second_max<arr[j] && arr[j]<max){
                second_max=arr[j]
            }
        }
    }else{
        for(let j=0;j<arr.length;j++){
            if(second_max<arr[j] && arr[j]<max){
                second_max=arr[j]
            }
        }
    }
    return arr.indexOf(second_max);
}


// 5.  Given an array of numbers, padding amount and repeat count. Pad the array in the
//     following way: the padding amount specifies how many elements should be taken from
//     the array edges, the repeat amount specifies how many times the pad should be
//     repeated. Also, you should check that padding amount &lt;= length of array.

function New_Array(arr,padAmount,repeat){
    let front=[]
    let end=[]
    if(padAmount>arr.length){
        return '“Invalid padding amount”'
    }else{
        for(let i=0;i<padAmount;i++){
            front.push(arr[i])
        }
        for(let i=arr.length-padAmount;i<arr.length;i++){
            end.push(arr[i])
        }
    }
    for(let i=0;i<repeat;i++){
        arr=front.concat(arr,end)
    }
    return arr;
}
// 6.  Write a program to print rectangle pattern for given number using loop. (in this example n = 5)

function rectangle(number){
    let res='';
    let row='';
    for(let i=0;i<number;i++){
        row=''
        for(let j=0;j<number;j++){
            row+=' *'
        }
        res+=row;
        res+='\n'
    }
    return res;
}

// 7.  Write a program to print rectangle pattern for given number using loop. (in this example n = 5)

function empty_rectangle(number){
    let res=''
    let row=''
    let star;
    for(let j=0;j<number;j++){
        res+='*'
        star=res
    }
    for(let j=0;j<number;j++){
        if(j==0 || j==number-1){
            row+='*'
        }else{
            row+=' '
        }
    }
    for(let i=1;i<number-1;i++){
        res+='\n'+row;
    }
    res+='\n'+star
    return res;
}

// 8.  Print the following number pattern.

function Number_pyramid(number){
    let row=''
    let res=''
    for(let i=1;i<=number;i++){
        res+=i;
        row+=res+'\n';
    };
    for(let i=number;i>0;i--){
        res='';
        for(let j=1;j<i;j++){
            res+=j
        }
        row+=res+'\n'
    }
    return row;
}