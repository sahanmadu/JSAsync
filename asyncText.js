
//this is how js async works
// for learning 
// callbacks , promises , async and awiat 



const first = ()=>{
    return "I'm first";
}

const second = ()=>{
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve ("I'm second");
},4000);
   })
    
}

const third = ()=>{
    return "I'm third";
}

const callMe = async ()=>{
    let one =first();
    console.log(one);

    let two =await second();
    console.log(two);

    let three =third();
    console.log(three);
}

callMe();