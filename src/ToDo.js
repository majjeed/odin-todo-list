class ToDo {
    constructor(title, description, dueDate = "", priority = "") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    display() {
        return `${this.title}: ${this.description} (Due: ${this.dueDate}, Priority: ${this.priority})`;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    set title(value) {
        this._title = value;
    }

    set description(value) {
        this._description = value;
    }

    set dueDate(value) {
        this._dueDate = value;
    }

    set priority(value) {
        this._priority = value;
    }
}

export { ToDo };