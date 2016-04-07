import {bootstrap} from 'angular2/platform/browser'
import {App} from './app'
import {FriendService} from "./friends"

bootstrap(App, [FriendService])