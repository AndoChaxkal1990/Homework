//1.Given a sentence with missing words and an array of words. Replace all ‘_’ in a
// sentence with the words from the array.

function line_Change_word(string,array){
    let k=0
    let f=[]
    let str=''
    for(let i=0; i<=string.length-1; i++){
        if(string[i]=='_'){
            f.push(array[k]);
            k++;
        }else{
            f.push(string[i]);
        }

    }
    for(let i=0; i<f.length-1;i++){
        str+=f[i]
    }
    return str;
}


// 2.Separate Numbers in array

function SeparateNumbers(array){
    let arr1=[]
    let arr2=[]
    for(let i=0;i<array.length;i++){
        if(typeof(array[i])=="number" && array[i]%2==0){
            arr2.push(array[i]);
        }else if(typeof(array[i])=="number" && array[i]%2==1){
            arr1.push(array[i]);
        }

    }
    for(let i=0;i<arr2.length; i++){
        arr1.push(arr2[i])
    }
    return arr1;
}


// 3.Given an array of strings and numbers. Print the number of integers and the number of
// strings in the array.

function Distinguish_Number_String(array){
    let Quantity1=0
    let Quantity2=0
    for(let i=0;i<array.length;i++){
        if(typeof(array[i])=="number"){
            ++Quantity1;
        }else if(typeof(array[i])=="string"){
            ++Quantity2;
        }
    }
    return (`“Numbers: ${Quantity1}, Strings:${Quantity2}”`);
}


// 4.Given an array of strings. Find the strings with maximum and minimum lengths in array.
// Print the sum of their lengths.

function Max_Length_Amount_Min_Length(array){
    let min=array[0].length
    let max=array[length-1].length;
    for(let i=0;i<array.length;i++){
        if(min>array[i].length){
            min=array[i].length;
        }else if(max<array[i].length){
            max=array[i].length;
        }
    }
    return (min+max);
}


// 5. Given an array of numbers. Print the sum of the elements in array.

function AmountArray(array){
    let Amount=0
    for(let i=0;i<array.length;i++){
        Amount=Amount+array[i];}
    return Math.abs(Amount);
};


// 6.Given an array. Create the array which elements are products between two neighbours.

function Produced_by_neighboring_members(array){
    let b;
    let arr=[];
    for(let i=0;i<array.length-1; i++){
        for(let j=1;j<=array.length;j++){
            if(j-i==1){
                b=array[i]*array[j]
                arr.push(b);}
        }
    }
    return arr;
};
