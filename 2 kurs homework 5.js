//  Given a sorted array and an element from that array. Find the index of that
//  element using binary search.

function binarySearch(arr, n) {
    let min = 0;
    let max = arr.length - 1;
    if(n<arr[min] ||n>arr[max] || n===undefined){
        return -1;
    }else{
        for(let i=0; i<arr.length; ){
            i = Math.floor((max +1+ min)/2);
            if(arr[i] === n){
                return i;
            }else if(max===min|| Math.abs(max-min===1)){
                return -1;
            }else if (arr[i] < n){
                min = i ;
            }else if(arr[i]>n) {
                max = i ;
            }
        };
    }
}



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
   
