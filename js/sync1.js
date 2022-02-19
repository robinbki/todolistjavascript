const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changetext(element, text, color,time){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            resolve();
        }else{
            reject();
        }
    },time)
})
}
changetext(heading1,"one","red",1000)
.then(()=>changetext(heading2,"two","green",1000))
.then(()=>changetext(heading3,"three","yellow",1000))
.then(()=>changetext(heading4,"four","pink",1000))
.then(()=>changetext(heading5,"five","lightpink",1000))
.then(()=>changetext(heading6,"six","darkred",1000))
.then(()=>changetext(heading7,"seven","purple",1000))
