const whiteButton=document.getElementById("white");
const blackButton=document.getElementById("black");
const oliveButton=document.getElementById("olive");
const purpleButton=document.getElementById("purple");

const body=document.body;
var className=document.body.className;
const theme=localStorage.getItem('theme');

if(theme){
    body.classList.replace(className,theme);
    className=theme;
}

whiteButton.onclick=() =>
{
    body.classList.replace(className,'white');
    className='white';
    localStorage.setItem('theme','white');
}

blackButton.onclick=() =>
{
    body.classList.replace(className,'black');
    className='black';
    localStorage.setItem('theme','black');

}

oliveButton.onclick=() =>
{
    body.classList.replace(className,'olive');
    className='olive';
    localStorage.setItem('theme','olive');

}

purpleButton.onclick=() =>
{
    body.classList.replace(className,'purple');
    className='purple';
    localStorage.setItem('theme','purple');

}