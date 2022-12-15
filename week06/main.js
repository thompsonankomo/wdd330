const textInputField = document.querySelector('text-input-field');
const addButton =document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click' ,() =>{
if (textInputField.value.trim().length == '')
return;

const todoItemContainer = document.createElement('div');
todosItemContainer.classList.add('todo-item-container');

todosContainer.appendChild(todoItemContainer);

const todoText = document.createElement('p');
todoText.id = 'todo-text';
todoText.innerText = textInputField.value;
todoItemContainer.appendchild(todoText);

const editButton = document.createElement('button');
editButton.id =' edit-button';
const editText= document.createElement('edit');
editButton.appendChild('editText');
todoItemContainer.appendChild(editButton);
editButton= addEventListener('click', '()')=>{
    textInputField.value =todoText.innerText;
    const parent = editButton.parentElement;
    parent.parentElement.removeChild(parent);
}

const deleteButton =  document.createElement('button');
deleteButton.id ='delete-button';
deleteButton.appendChild('delete-button');
todoItem.appendChild(deleteButton);

deleteButton.addEventListener('click',() =>{
    const parent = deleteButton.parentElement
    parent.parentElement.removeChild(parent);
})



textInputField.value ='';
});