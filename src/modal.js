const initializeModal = () => {

    const newProjectDialog = document.querySelector(".newProjectDialog");
    const newProjectInput = newProjectDialog.querySelector(".newProjectInput");
    const confirmBtn = newProjectDialog.querySelector("#confirmBtn");
    const showButton = document.getElementById("showDialog");
    const outputBox = document.querySelector("output");

    showButton.addEventListener("click", () => {
        newProjectDialog.showModal();
    });

    // "Favorite animal" input sets the value of the submit button
    newProjectInput.addEventListener("change", (e) => {
        confirmBtn.value = newProjectInput.value;
    });

    // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
    newProjectDialog.addEventListener("close", (e) => {
        outputBox.value =
            newProjectDialog.returnValue === ""
                ? "No return value."
                : `${newProjectDialog.returnValue}`; // Have to check for "default" rather than empty string
    });

    // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault(); // We don't want to submit this fake form
        newProjectDialog.close(newProjectInput.value); // Have to send the select box value here.
    });

};

// Ensure the DOM content is fully loaded before initializing the modal
document.addEventListener('DOMContentLoaded', initializeModal);

export { initializeModal };