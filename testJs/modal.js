const open_modal = document.querySelector("#open_modal");
const modal_container = document.querySelector("#modal_container");
const X_btn = document.querySelector("#X_btn");
const close_btn = document.querySelector("#close_btn");

open_modal.onclick = function(){
    modal_container.style.visibility = "visible"
}

X_btn.onclick = function(){
    modal_container.style.visibility = "hidden"
}

close_btn.onclick  = function(){
    modal_container.style.visibility = "hidden"
}

modal_container.onclick  = function(event){
    console.log(event.target);
    if(event.target === modal_container){
        modal_container.style.visibility = "hidden"
    };
}
