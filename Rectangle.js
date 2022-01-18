class Rectangle{
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
    getS(){
        return this.height * this.width;
    }
    getP(){
        return (this.height + this.width)*2;
    }
    drawRactangle(x,y){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.fillRect(x,y,this.width,this.height);
        ctx.fill();
    }
}
let rectangle1= new Rectangle(300,500);
alert( "chu vi là = " + rectangle1.getP());
alert("diện tích là = " + rectangle1.getS());
rectangle1.drawRactangle(250,250);

