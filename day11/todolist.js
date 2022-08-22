// selectors
// var task = document.querySelector(".todo-input");
// var button = document.querySelector("button");
// var list = document.querySelector(".todo-list");

// //e means event for form submission
// button.onclick= function create _todo(e) {
//     e.preventDefault(); //too prevent data to go to server


//     var new_div=document.createElement("div");
//     new_div.classList.add("to_do_"); //to create class for every div of todo list


//     var newLi = document.createElement("li");
//     newLi.classList.add("todo_item");
//     newLi.innerHTML= toInput.value;
//     new_div.appendChild(newLi);


//     var newLi = document.createElement("button");
//     button_item.classList.add("button_item");
//     button_item.innerHTML= <i class="check"></i>
//     new_div.appendChild(button_item);


//     var newLi = document.createElement("button");
//     delbtn.classList.add("delbtn");
//     delbtn.innerHTML= <i class="del"></i>
//     new_div.appendChild(delbtn);

//     list.appendChild(new_div);

// };
// list.onclick = function checkbtn(e){
//     var check = e.target;
//     if(check.classList(0) == "delbtn"){
//         var parentNode = check.parentElement;
//         parentNode.remove();
//     }
//     else if(check.classList(0) == "button_item" ){
//         var parentNode = check.parentElement;
//         parentNode
//     }
// } 



var inp=document.querySelector('.todo-input');
var btn=document.querySelector('button');
var list=document.querySelector('.todo-list');
btn.onclick = function crtodo(e){
    e.preventDefault();
    if(inp.value.length>0){
    var newdiv=document.createElement("div");
    newdiv.classList.add('tododiv');

    var newli=document.createElement("li");
    newli.classList.add('tododiv_item');
    newli.innerHTML=inp.value;
    newdiv.appendChild(newli);

    var checkbtn=document.createElement("button");
    checkbtn.classList.add('tododiv_check');
    checkbtn.innerHTML='<i class="fa fa-check"></i>';
    newdiv.appendChild(checkbtn);

    var endbtn=document.createElement("button");
    endbtn.classList.add('tododiv_end');
    endbtn.innerHTML='<i class="fa fa-trash"></i>';
    newdiv.appendChild(endbtn);
    list.appendChild(newdiv);
    inp.value= "";
    }
    else{alert("Mantatory Input Field")}
}
list.onclick =function checkbtn(e){
    var check =e.target;
        if(check.classList[0]=="tododiv_end")
        {
            var parentnode=check.parentElement;
            parentnode.remove();
        }
        if(check.classList[0]=="tododiv_check")
        {
            var parentnode=check.parentElement;
            parentnode.classList.add("done");
        }
}