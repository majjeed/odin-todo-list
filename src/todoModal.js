const initializeToDoModal = () => {
    // Create the modal elements
    const todoDialog = document.createElement('dialog');
    todoDialog.classList.add('newToDoDialog');

    const form = document.createElement('form');
    form.method = 'dialog';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';
    titleInput.classList.add('newToDoTitle');

    const descriptionInput = document.createElement('textarea');
    descriptionInput.placeholder = 'Description';
    descriptionInput.classList.add('newToDoDescription');

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.classList.add('newToDoDueDate');

    const priorityInput = document.createElement('select');
    priorityInput.classList.add('newToDoPriority');
    ['Low', 'Medium', 'High'].forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        priorityInput.appendChild(option);
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => todoDialog.close());

    const confirmBtn = document.createElement('button');
    confirmBtn.type = 'submit';
    confirmBtn.textContent = 'Confirm';

    form.appendChild(titleInput);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateInput);
    form.appendChild(priorityInput);
    form.appendChild(cancelBtn);
    form.appendChild(confirmBtn);
    todoDialog.appendChild(form);

    document.body.appendChild(todoDialog);

    // Show the modal and return a promise that resolves with the ToDo data
    return new Promise((resolve) => {
        todoDialog.showModal();

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            todoDialog.close();
            resolve({
                title: titleInput.value,
                description: descriptionInput.value,
                dueDate: dueDateInput.value,
                priority: priorityInput.value,
            });
        });

        cancelBtn.addEventListener('click', () => {
            resolve(null);
        });
    });
};

export { initializeToDoModal };
