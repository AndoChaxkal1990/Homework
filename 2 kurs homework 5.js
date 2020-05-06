//  Given a sorted array and an element from that array. Find the index of that
//  element using binary search.

function binarySearch(arr, n){
let start=0;
let end=arr.length-1;
let midIndex;
while(start<=end){
        midIndex=Math.floor((start+end)/2)
        if(n===arr[midIndex]){
            return midIndex;
        }else if(n<arr[midIndex]){
            end=--midIndex;
        }else if(n>arr[midIndex]){
            start=++midIndex;
        }
    };
return false
}


// tarberak 2 rekursia

function binarySearch(arr, n, start=0, end=arr.length-1){
let i=Math.floor((start+end)/2)
    if(arr[i]===n){
        return i;
    }
    if(start===end){
        return false
    }
    if(n>arr[i]){
       return  binarySearch(arr,n,i+1,end)
    }
    if(n<arr[i]){
        return binarySearch(arr,n,start,i-1)
    }
}
