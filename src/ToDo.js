class ToDo {
    constructor(title, description, dueDate = "", priority = "") {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
    }

    display() {
        return `${this._title}: ${this._description} (Due: ${this._dueDate}, Priority: ${this._priority})`;
    }
}

export { ToDo };
