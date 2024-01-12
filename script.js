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
    del.addEventListener('click',function(){
        const thisItem = this.parentNode;
        thisItem.parentNode.removeChild(thisItem);
    }) 
    input.focus();
}
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const submit = document.querySelector('button');
submit.addEventListener('click',clicked);
