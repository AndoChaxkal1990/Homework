let a=+prompt('tiv asa');
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
