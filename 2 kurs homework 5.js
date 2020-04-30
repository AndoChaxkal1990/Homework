//  Given a sorted array and an element from that array. Find the index of that
//  element using binary search.

function binarySearch(arr, n) {
    let min = 0;
    let max = arr.length - 1;
    if(n<arr[min] ||n>arr[max] || n===undefined){
        return -1;
    }else{
        for(let i=0; i<arr.length; ){
            i = Math.floor((max + min)/2);
            if(arr[i] === n){
                return i;
            }else if(max===min|| Math.abs(max-min===1)){
                return -1;
            }else if (arr[i] < n){
                min = i +1;
            }else if(arr[i]>n) {
                max = i -1;
            }
        };
    }
}


//. tarberak 2 rekursiayov

function  binarySearch(arr,n,min=0,max=arr.length){
    if(n<arr[min] ||n>arr[max-1]){
        return false;
    }else{
        if(arr[min]===n){
            return min
        }else if(arr[min]<n){
            min=Math.floor((min+1+max)/2);
            if(arr[min]>n){
                max=min
                min=0
            }
            return binarySearch(arr, n , min,max);
        }else{
            return false;
        }
    }
}
