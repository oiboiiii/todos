
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {

        const li = document.createElement('li'); 

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const span = document.createElement('span');
        span.textContent = taskText;
        span.classList.add('task-text');

        checkbox.addEventListener('change', () => {
            span.classList.toggle('done', checkbox.checked);
        })

        li.appendChild(checkbox);
        li.appendChild(span);

        taskList.appendChild(li);

        taskInput.value = '';
    
    }
})