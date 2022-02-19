console.log("script start");
const backet = ["chips","aalow","water","namkeen"];
const mypromise = new Promise((resolve,reject)=>{
    if(backet.includes("namkeen")&&backet.includes("aalow")&&backet.includes("water")){
        resolve("frid rice");
    }else{
        reject("could not do it");
    }
})
mypromise.then((myfridrice)=>{
console.log(`my fridrice`,myfridrice);
},(error)=>{
console.log(error);
})
setTimeout(()=>{
console.log('hello frm settime out');
},1000)

for(let i= 0; i<=99; i++){
    console.log(Math.random(),i);
}

console.log("script end");