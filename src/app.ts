import {Component} from 'angular2/core'
import {NameComponent} from "./name-component";

@Component({
    selector: 'jazoon-app',
    template: `
        <h1>hello {{myName}}</h1>
        <input type="text" [(ngModel)]="myName" />
        <ul>
            <li *ngFor="#foo of foos">
                {{foo}}
            </li>
        </ul>
        <name-component [(name)]="myName"></name-component>
    `,
    directives: [NameComponent]
})
export class App {
    myName:string;
    isDisabled: boolean = false;
    foos: string[];

    constructor (){
        this.foos = ['andy', 'gabriel', 'joachim'];
        this.myName = 'Andy'
    }

}