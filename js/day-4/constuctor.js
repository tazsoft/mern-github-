class myclass{
    constructor(a,b){
       this.fnumber=a;
       this.lnumber=b;
    }
    add(){
        var z=this.fnumber+this.lnumber;

        console.log(z)
    }
}

var obj=new myclass(10,20);

obj.add()