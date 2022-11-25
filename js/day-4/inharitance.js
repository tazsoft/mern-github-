class prent{

    hello1(){
        console.log("hello 1");
    }
    hello2(){
        console.log("hello 2");
    }
}

class child extends prent{
    hello1(){
        console.log("i am taz");
    }
}

let obj = new child();
obj.hello1();