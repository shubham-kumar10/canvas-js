window.addEventListener("load", ()=>{
    const canvas= document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    console.log('Hello')
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    // ctx.strokeRect(50,50,200,200);

    let painting = false;

    function startPosition(){
        painting = true;
    }

    function endPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(event){
        if(!painting)
            return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX,event.clientY);
    }

    canvas.addEventListener('mousedown',startPosition);
    canvas.addEventListener('mouseup',endPosition);
    canvas.addEventListener('mousemove',draw);
})