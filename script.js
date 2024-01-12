const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
function clicked(event){
    const item = input.value;
    input.value = '';

}

button.addEventListener('click',clicked(event))