const formtodo = document.querySelector(".form-todo");
const todoinput =document.querySelector(".form-todo input[type='text'");
const todolist = document.querySelector(".todo-list");
formtodo.addEventListener("submit",(e)=>{
e.preventDefault();
const newtodotext=todoinput.value;
const newli= document.createElement("li");
const newinnterhtml= `
<span>${newtodotext}</span>
<div class="todo-buttons">
  <button class="todo-btn done">Done</button>
  <button class="todo-btn remove">Remove</button>
</div>`;
newli.innerHTML=newinnterhtml;
todolist.append(newli);
todoinput.value="";

})
todolist.addEventListener("click",(e)=>{
if (e.target.classList.contains("remove")) {
    const targetedli= e.target.parentNode.parentNode;
    targetedli.remove();
}
if (e.target.classList.contains("done")) {
   const donep= e.target.parentNode.previousElementSibling;
   donep.style.textDecoration="Line-through";
}
})