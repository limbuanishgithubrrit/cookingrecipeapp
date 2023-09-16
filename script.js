let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

const image=document.querySelector('img');
const recipeImage=document.querySelector('input');

input.addEventListener('change',(e)=>{
    image.src=URL.createObjectURL(e.target.files[0]);

});