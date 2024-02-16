const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++)
    {
        const pos = Math.floor(Math.random()*16)
        color += hex[pos]
    }
    return color
}
let interval;
const startChangingColor= function(){
    if(!interval)
    interval = setInterval(function(){
        document.body.style.backgroundColor=randomColor()
    },1000)
}

const stopChangingColor = function(){
    clearInterval(interval)
    interval = null
}

document.querySelector('#start').addEventListener('click',startChangingColor,false)
document.querySelector('#stop').addEventListener('click',stopChangingColor,false)