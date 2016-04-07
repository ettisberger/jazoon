import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {FriendService} from "./friends";

@Component({
    selector: 'name-component',
    template: `
        <div>Hello my name is {{name}}</div>
        <button (click)="changeName()">Change my name</button>
    `,
    //providers: [FriendService] this would init friend service again
})

export class NameComponent {
    @Input('name') testName: string;
    @Output() nameChange: EventEmitter<string> = new EventEmitter();

    changeName(){
        this.nameChange.emit(this.testName + '!!!');
    }

    constructor(friendService: FriendService) {
        console.log(friendService);
    }
}