export interface Todo {
    text?: string; // optional
    completed?: boolean; // optional
}

export class TodoService {
    todos: Todo[] = [];
    
    addTodo(newTodo:Todo){
        this.todos = this.todos.concat([newTodo]);
    }
}