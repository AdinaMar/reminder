const container = document.getElementsByClassName("affirmations")[0];
const newReminder = document.querySelector("#newReminder");
const nuovo = document.querySelector(".remind");
const altroDiv = document.querySelector(".text");
const check = document.querySelector(".btn-check");
const deleta = document.querySelector(".btn-delete");
/*const remindd = check.parentNode.parentNode.firstChild;*/
/*console.log(check.parentNode.parentNode.firstChild);*/
const nuovo2 = document.querySelector(".remind2");
const altroDiv2 = document.querySelector(".text2");
const check2 = document.querySelector(".btn-check2");
const deleta2 = document.querySelector(".btn-delete2");

check.addEventListener("click", function() {
   
    altroDiv.style.textDecoration="line-through";
});

deleta.addEventListener("click", function() {
    nuovo.parentNode.removeChild(nuovo);
   
});

check2.addEventListener("click", function() {
    altroDiv2.style.textDecoration = "line-through";
});

deleta2.addEventListener("click", function() {
    nuovo2.parentNode.removeChild(nuovo2);
});





function createRemind(id, message) {

    if(message && message.length > 50) {
        alert("Only 50 characters allowed");
        return;
    } else if (!message) {
        alert("Enter a reminder");
        return;
    }

const li = document.createElement("li");
li.id = id;
li.className = "remind";
const div = document.createElement("div");
div.className = "text";
div.innerText = message;

//container dei bottons
const actionContainer = document.createElement("div");
actionContainer.className = "actions";

//buttons
const checkBtn = document.createElement("button");
checkBtn.className = "btn-check";
checkBtn.innerText = "Done";

const deleteBtn = document.createElement("button");
deleteBtn.className = "btn-delete";
deleteBtn.innerText = "Delete";
//events check and delete

checkBtn.addEventListener("click", function() {

    if(li.id == id) {
        div.style.textDecoration ="line-through";
    }
});

deleteBtn.addEventListener("click", function() {
    if(li.id == id) {
        container.removeChild(li);
    }
});

//append buttons for actions
actionContainer.appendChild(checkBtn);
actionContainer.appendChild(deleteBtn);
//appent element to Li
li.appendChild(div);
li.appendChild(actionContainer);

return li;
 
}

newReminder.addEventListener("click", function() {
    let message = prompt("Create your own 'TO DOs");
    let id = Math.floor(Math.random() * 100);
    let reminder = createRemind(id, message);
    container.appendChild(reminder);
});

