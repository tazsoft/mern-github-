// var mymap=new Map();

// mymap.set("key1","ami");
// mymap.set("key2","tumi");
// mymap.set("key3","he");
// mymap.set("key4","she");
// mymap.set("key5","they");
// mymap.set("key6","them");

// mymap.delete('key1');
// var mgetmy=mymap.get('key2');
// mymap.clear();
// for(let myvalue of mymap.values()){
//     console.log(myvalue);
// }
// console.log("");
// for(let mykey of mymap.keys()){
//     console.log(mykey);
// }
// if (mymap.has('key1')) {
//     console.log("ase");
// }else{
//     console.log("nai");
// }
// console.log(mymap.keys());
// console.log(mymap.values());
// console.log(mgetmy);

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)

// const sum =numbers.map(myfunction);
// // console.log(newArr);
// function myfunction(num){
// return num*10;
// }
// console.log(sum);

var arr=[
    {fname:"taz",lname:"uddin"},
    {fname:"shouib",lname:"uddin"},
    {fname:"eklas",lname:"uddin"},
    {fname:"pranto",lname:"uddin"}
    
]

var name=arr.map(Fonname);

console.log(name);

function Fonname(n){
    return n.fname+" "+n.lname
}