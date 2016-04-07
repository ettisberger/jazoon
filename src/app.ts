import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router'
import {TodoNew, TodoDetail, TodoList} from './routes/index'

@Component({
    selector: 'todo-app',
    template: `
        <h1>todos</h1>
        <div>
            <a [routerLink]="['TodoList']">Todos</a>
            <a [routerLink]="['TodoNew']">New Todo</a>
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    styles: []
})
@RouteConfig([
    {name: 'TodoList', path: '/todos', component: TodoList, useAsDefault: true},
    {name: 'TodoNew', path: '/new', component: TodoNew}
])
export class App {

}