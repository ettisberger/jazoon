import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'
import {TodoNew, TodoDetail, TodosList} from './routes/index'
import {TodoService} from "./services/todos";

@Component({
    selector: 'todo-app',
    template: `
        <h1>todos</h1>
        <div>
            <a [routerLink]="['TodosList']">Todos</a>
            <a [routerLink]="['TodoNew']">New Todo</a>
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, TodoService],
    styles: []
})
@RouteConfig([
    {name: 'TodosList', path: '/todos', component: TodosList, useAsDefault: true},
    {name: 'TodoNew', path: '/new', component: TodoNew}
])
export class App {

}