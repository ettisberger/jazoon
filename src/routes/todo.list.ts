import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {TodoService, Todo} from "../services/todos";

@Component({
    selector: 'todo-list',
    template: `
        <ul>
            <li *ngFor="#todo of todos">{{todo.text}}</li>
        </ul>
    `
})
class TodoList {
    @Input() todos: Todo[];
}

@Component({
    selector: 'todo-list',
    template: `
        <h1>Todo List</h1>
        <todo-list [todos]="todoService.todos"></todo-list>
    `,
    directives: [TodoList],
    providers: [],
    styles: []
})
export class TodosList {
    constructor(public todoService: TodoService) {}

}