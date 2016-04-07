import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'name-component',
    template: `
        <div>Hello my name is {{name}}</div>
        <button (click)="changeName()">Change my name</button>
    `
})

export class NameComponent {
    @Input('name') testName: string;
    @Output() nameChange: EventEmitter<string> = new EventEmitter();

    changeName(){
        this.nameChange.emit(this.testName + '!!!');
    }
}