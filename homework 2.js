// 1. Find the sign of product of three numbers without multiplication operator. Display the
// specified sign.
let a=[-21, -47, -12];
let k=0
let c="";
for(let i=0; i<a.length; i++){
    if(a[i]==0){
        c="unsigned";
    }else if(a[i]<0){
        k++
    }

};
if(c!==""){
    alert(c)
}else if(k%2==0){
    alert('+');
}else {alert('-');
};

//2. Insert a digit and a number. Check whether the digits contains in the number or not.

let mystr=''+prompt('mutqagreq tiv@')
let n=+prompt('mutqagreq te dzer nshac tvi mej inch tvanshan eq pntrum')
let b='no';
for(let i=0;i<mystr.length;i++){
    if(mystr[i]==n){
        b='yes';
    }
}
alert(b);


//3. Enter a number. Reverse its first and last digits. Print the new number.

let myStr=prompt('tiv aseq')
myStr=''+Math.abs(myStr)
if(myStr.length==1){alert(myStr);
}else if(myStr.length==2){
    let n=myStr[myStr.length-1]+myStr[0];
    alert(n);
}else{
    let a=+myStr[0];
    let b=+myStr[myStr.length-1];
    let c=myStr.slice(1)
    let d=(c-b)/10
    let f=''+b+d+a;
    alert(f);}

//4. Given three numbers. Sort them by the ascending order.

let k=[45,26,78,-23,-456,0,];
k.sort(function(a,b){
    return a-b});
console.log(k);


//5. quadratic equations:

let a=5;
let b=-13;
let c=6;
let D=Math.pow(b,2)-4*a*c
if(a==0){alert('“Enter valid constans”');
}else if(D==0){alert(`${-b/(2*a)}`);
}else if(D<0){alert('“Solution does not exists”');
}else{alert(`“Solutions are ${(-b-Math.sqrt(D))/(2*a)} and ${(-b+Math.sqrt(D))/(2*a)}`);}


// 6 .two if operators.

var n=+prompt()
var i=0
var j=0
if(n%2===0){
    if(!Math.floor(n/10)){
        i+=1;
    }
}
if(n%3===0){
    if(n%10===1){
        j+=1;
    }
}
console.log(i);
console.log(j);

//7. Triangle area

let a=+prompt('tiv aseq');
let b=+prompt('tiv aseq');
if(a<=0 || b<=0){
    alert('Please enter only positives');
}else{
    let c=((a*b)/2);
    alert(`Square of the triangle is ${c}`);}


//8. Enter a number. Find the difference between its biggest and smallest digits.

let a=prompt('tiv aseq');
let b=a.split('').sort();
let c=b[b.length-1]-b[0];
alert(c);
