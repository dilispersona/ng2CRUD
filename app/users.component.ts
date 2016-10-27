import {Component, OnInit} from 'angular2/core';
import { UserService } from './users.service';
import { RouterLink } from 'angular2/router';

@Component({
    templateUrl: 'app/users.component.html',
    providers: [UserService],
    directives: [RouterLink]
})
export class UsersComponent { 
    users: any[];
    constructor(private _service: UserService){

    }
    
    ngOnInit(){
        this._service.getUsers()
            .subscribe(users => this.users = users);
    }

 

}