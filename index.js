"use strict";

const allBtn = document.getElementsByClassName('add-btn')

for(const btn of allBtn){
    btn.addEventListener('click', function(){
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        
    })
}