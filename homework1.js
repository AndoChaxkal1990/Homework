
//1 givent two numbers

let a=+prompt('asaceq bajaneli@');
let b=+prompt('asaceq bajanarar@');
if(a%b==0 || b%a==0)
{
    alert('1')
}
else
{
    alert('0');
}

//2find the third angle

let a=+prompt('asaceq erankyan arajin ankyun@');
let b=+prompt('asaceq erenkyan erkrord ankyun@');
alert(`errord ankyun@ havasar klini ${180-a-b}`);

//3 print the value of n+nn+nnn

let a=+prompt('tiv aseq')
let b=a+a
let c=a+a+a
let d=String(a)+b+c
alert(d)

//4 last digit of the inserted

let a=+prompt('tiv aseq');
if(a<10)
{
    alert(a);
}
else{
    let b=a%10
    if(b=='')
    {
        alert(a);
    }
    else
    {
        let c=(a-b)/10
        let d=String(b)+c
        alert(d)
    }
}

//5 given five numbers

let a=+prompt('asaceq arajin tiv@');
let b=+prompt('asaceq erkrord tiv@');
let c=+prompt('asaceq errord tiv@');
let d=+prompt('asaceq chorrord tiv@');
let e=+prompt('asaceq hingerord tiv@');
alert((a+b+c+d+e)/5)

