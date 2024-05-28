class Project {
    constructor(name) {
        this._name = name;
        this._todos = [];
    }

    addTodo(todo) {
        this._todos.push(todo);
    }

    getTodos() {
        return this._todos;
    }

    get name() {
        return this._name;
    }
}

export { Project };
