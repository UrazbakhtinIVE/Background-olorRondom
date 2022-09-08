const btn = document.getElementById("btn");
const body = document.querySelector('body');
const backColor = document.querySelector('.backColor');

const colors = [
'red', 
'green', 
'black',
'pink',
'#4287f5',
'#f54299',
'#5442f5',
'#e6f542',
]

getRondomColor=(arr)=>{
    let item=arr[Math.floor(Math.random()*arr.length)];
    return item;
}
getColor=()=>{
   let color = body.style.backgroundColor = getRondomColor(colors); 
   body.style.backgroundColor = color;
   backColor.textContent = color;
}
btn.addEventListener("click",getColor);