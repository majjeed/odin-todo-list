const initializeModal = () => {
    return new Promise((resolve) => {
        const newProjectDialog = document.querySelector(".newProjectDialog");
        const newProjectInput = newProjectDialog.querySelector(".newProjectInput");
        const confirmBtn = newProjectDialog.querySelector("#confirmBtn");

        const handleClose = () => {
            newProjectDialog.removeEventListener('close', handleClose);
            resolve(newProjectDialog.returnValue !== "cancel" ? newProjectDialog.returnValue : null);
        };

        // Show the modal and add event listeners
        newProjectDialog.showModal();

        newProjectInput.value = ""; // Clear any previous input
        newProjectDialog.addEventListener('close', handleClose);

        confirmBtn.addEventListener("click", (event) => {
            event.preventDefault();
            newProjectDialog.close(newProjectInput.value);
        });
    });
};

export { initializeModal };
