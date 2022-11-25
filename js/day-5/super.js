class prent{
   hello(){
    console.log("What is your name")
   }
hello2(){
    console.log("i am taz");
}
}

class child extends prent{
   demo(){
   super.hello();
   super.hello2();
   }
}

obj=new child();

obj.demo();