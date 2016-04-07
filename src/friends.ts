import {Injectable} from 'angular2/core'

@Injectable()
export class FriendService {
    list: string [];

    constructor(){
        console.log('init friend service');
        this.list = ['andy', 'gabriel', 'joachim'];
    }
}