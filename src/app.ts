import {Component} from 'angular2/core'
import {NameComponent} from "./name-component";
import {FriendService} from "./friends";

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
        <ul>
        <li *ngFor="#friend of friends">{{friend}}</li>
        </ul>
    `,
    directives: [NameComponent],
    providers: [FriendService]
})
export class App {
    myName:string;
    isDisabled: boolean = false;
    foos: string[];
    friends: string[];

    constructor (friendService: FriendService){
        this.foos = ['andy', 'gabriel', 'joachim'];
        this.myName = 'Andy';
        this.friends = friendService.list;
    }

}