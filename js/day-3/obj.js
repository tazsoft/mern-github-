var bilobj={
    name:"bill",
    shirt:{
        color:"white",
        quality:"good"
    },
    face:{
        smiling:"yes"
    },
    FMname:{
        grend_father:{
            alive:"yes",
            name:"ect"
        }
    }
}

let obj=bilobj.FMname.grend_father.name;

// console.log(obj);
console.log(Object.values(bilobj));
// console.log(Object.keys(bilobj));


// for(let poops in bilobj){

//     console.log(bilobj[poops]);
// }