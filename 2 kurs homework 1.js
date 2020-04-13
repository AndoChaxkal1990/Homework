//  1.Print X
function printX(n){
    let row=''
    for(let i=0; i<n*2-1; i++){
        for(let j=0; j<n*2-1; j++){
            if(i===j || j+2===2*n-i){
                row+='*'
            }else{
                row+=' '
            }
        }
        row+='\n'
    }
    return row;
}


// 2.Given an array of numbers. Print frequency of each unique number. (Frequency is the
//   count of particular element divided by the count of all elements)

function Frequency(arr){
    let obj={};
    for(let i=0; i<arr.length; i++){
        let res=0
        for(let j=0; j<arr.length; j++){
            if(arr[i]==arr[j]){
                res+=1
            }
        }
        obj[arr[i]]=res/arr.length
    }
    return obj
}


// 3.Дал массив строк и чисел. Выведите количество целых чисел и количество
// строки в массиве.

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

// 4. Write a function that accepts a string(a sentence) as a parameter and finds the longest
//    word within the string․ If there are several words which are the longest ones, print the
//    last word(words can be separated by space, comma or hyphen).

function longestWordString(str){
    let arr=str.split(' ').sort((a,b)=>a.length-b.length);
    return arr[arr.length-1]
}

//  5. Write a function to find longest substring in a given a string without repeating characters
//     except space character.
//     If there are several, return the last one. Consider that all letters are lowercase.

function print(str){
    let str1 = ""
    let str2 = ""
    for(let i = 0 ; i<str.length; i++){
        if(str1.includes(str[i]) && str[i]!==" "){
            str1 = str1.slice(str1.indexOf(str[i])+1)
        }
        str1 +=str[i]
        if(str2.length<=str1.length){
            str2 = str1
        }
    }
    return str2
}


// 6. Write a function to compute a new string from the given one by moving the first char to
//    come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
//    subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

function revers(str){
    let result=''
    for(let i=0; i<str.length;i=i+3){
        let k='';
        for(let j=i; j<i+3 && j<str.length; j++){
            k+=str[j]
        }
        if(k.length===3){
            result+=k[1]+k[2]+k[0]
        }else{
            result+=k;
        }
    }
    return result;
};


// 7.Write a function, which receives an array as an argument which elements arrays of
//   numbers. Find biggest negative number of each array. Return product of that numbers.If
//   there is not any negative number in an array, ignore that one. Check that items of the
//   given array are arrays.


function productNegative(arr){
    let array=[]
    let result=1
    for(let g=0; g<arr.length; g++){
        if(Array.isArray(arr[g])){
            for(let i=0; i<arr.length; i++){
                let newarr=[]
                for(let j=0; j<arr[i].length; j++){
                    if(arr[i][j]<0){
                        newarr.push(arr[i][j])
                    }
                }
                if(newarr.length>0){
                    for(let k=0; k<newarr.length; k++){
                        for(let j=0; j<newarr.length; j++){
                            if(newarr[k]<newarr[j]){
                                let a=newarr[k]
                                newarr[k]=newarr[j]
                                newarr[j]=a
                            }
                        }
                    }
                    array.push(newarr[newarr.length-1])
                }
            }
            if(array.length!=0){
                for(let k=0;k<array.length;k++ ){
                    result*=array[k]
                }
            }else{
                result='‘No negatives’'
            }
        }else{
            result='‘Invalid Argument’'
        }
        return result
        break
    }
}


// 8. Write a JavaScript function to get all possible subsets of length 3 of the given array.
//    Assume that all elements in the array are unique.

function allPossibleVersion (arr){
    if(arr.length>3){
        let result=[];
        let index=0
        for(let i=0; i<=arr.length-3; i++){
            for(let j=i+1; j<=arr.length-1; j++){
                for(let k=j+1; k<arr.length; k++){
                    result[index]=[]
                    result[index].push(arr[i]);
                    result[index].push(arr[j]);
                    result[index].push(arr[k]);
                    index++
                }
            }
        }
        return result;
    }else{
        return arr;
    };
}

