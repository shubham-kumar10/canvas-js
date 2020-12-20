window.addEventListener("load", ()=>{
    const canvas= document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillRect(50,50,200,200);
})