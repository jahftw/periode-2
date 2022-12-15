class App
{
    runapplication()

    {
    console.log("hello world")
    
    let canvasvariable=document.getElementById("canvasId");
    console.log(canvasvariable)

    let g = canvasvariable.getContext("2d");
    g.beginPath()
    g.fillStyle = "red";
    g.moveTo(300,100);
    g.lineTo(700,200);
    g.lineTo(600,400);
    g.lineTo(200,300);
    g.closePath();
    g.stroke();
    g.fill()
    
    g.beginPath()
    g.moveTo(600,400)
    g.lineTo(600,500)
    g.lineTo(600,600)
    }

    
}

let app = new App();
app.runapplication();