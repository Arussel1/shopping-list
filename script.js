const ul = document.querySelector('ul');
const input = document.querySelector('input');
const submit = document.querySelector('button');
function clicked(event){
    const item = input.value;
    input.value = '';
    const li = document.createElement('li');
    const span = document.createElement('span');
    const del = document.createElement('button');
    li.appendChild(span);
    li.appendChild(del);
    del.innerText = 'Delete';
    span.innerText = item;
    ul.appendChild(li);

}

submit.addEventListener('click',clicked)