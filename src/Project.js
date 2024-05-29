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

    removeTodoByTitle(title) {
        this._todos = this._todos.filter(todo => todo.title !== title);
    }
}

export { Project };
