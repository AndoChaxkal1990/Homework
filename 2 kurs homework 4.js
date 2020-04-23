// 1. Given an array. Write a recursive function that removes the first element and returns
//    the given array. (without using arr.unshift(),assign second element to first, third element
//    to second...)

function arrayStartSecondIndex(array,i=0){
    if(array.length!=0 && i<array.length-1){
        array[i]=array[i+1];
        i++;
        return rem(array,i);
    }else{
        array.length=i;
        return array;
    }
}



// 2. Given an object. Invert it (keys become values and values become keys). If there is
//    more than key for that given value create an array.

function arrayObject(obj) {
    let res = {};
    for(let key in obj){
        if (res.hasOwnProperty(obj[key])){
            if(Array.isArray(res[obj[key]])){
                res[obj[key]].push(key)
            }else{
                res[obj[key]]=Array.from(res[obj[key]]);
                res[obj[key]].push( key);
            }
        } else {res[obj[key]] = key;
        }
    }
    return res;
}

//  3. Task

function asd(arr){
    let a;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if((arr[i].readStatus===true && arr[j].readStatus===true)&& arr[i].percent > arr[j].percent){
                a=arr[i];
                arr[i]=arr[j];
                arr[j]=a;
            }
        }
    }
    return arr;
}



// 4. Given an array and a number N.  Write a recursive function that rotates an array N
//    places to the left. (Hint: to add element to the beginning use arr.unshift())

function array(arr,n) {
    if (n > 0) {
        let el = arr.shift();
        arr.push(el)
        return array(arr, n - 1)
    } else if (n < 0) {
        let el = arr.pop()
        arr.unshift(el)
        return array(arr, n + 1)
    } else {
        return arr;
    }
}

//  5. Create a function that builds a tree like object given an array with object which
//     contains parent and id properties.

function tree(arr, par=null){
    let result={}
    for(let i=0; i<arr.length; i++){
        if(arr[i].parent===par){
            result[arr[i].id]=tree(arr, arr[i].id)
        }else if(i===arr.length-1){
            return result
        }
    }
    return result
}



// 6. Write a JavaScript function to get all possible subsets of given length of the given array.
//    Assume that all elements in the array are unique.

function subArrays(arr, n, result = [], temp = []) {
    if (n == 0) {
        let res=temp.slice();
        result.push(res);
        return result;
    };
    for (let i = 0; i <= arr.length-n; i++) {
        temp.push(arr[i]);
        subArrays(arr.slice(i + 1), n - 1, result, temp);
        temp.pop();
    }
    return result;
};

//  7. Create constructor function which instances would be objects with already
//     implemented method "map"(like Array.map)

function ObjMap(){
    this.map=function map(fn){
        let m={};
        for (let key in this){
            m[key]=fn(this[key], key, this)
        }
        return m;
    }
};

