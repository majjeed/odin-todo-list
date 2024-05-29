class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    display() {
        return `${this.title} - ${this.description} (Due: ${this.dueDate}, Priority: ${this.priority})`;
    }
}

export { ToDo };
