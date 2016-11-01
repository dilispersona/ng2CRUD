import { Component, OnInit } from 'angular2/core';
import { UserService } from './users.service';
import { RouterLink } from 'angular2/router';

@Component({
    templateUrl: 'app/users.component.html',
    providers: [UserService],
    directives: [RouterLink]
})
export class UsersComponent {
    users: any[];
    constructor(private _service: UserService) {

    }

    ngOnInit() {
        this._service.getUsers()
            .subscribe(users => this.users = users);
    }

   /* deleteUser(user){
        if(confirm("Are you sure you want to delete " + user.name + "?")){
            var index = this.users.indexOf(user);

            this.users.splice(index, 1);
            this._service.deleteUser(user.id)
                .subscribe(null,
                    err => {
 						alert("Could not delete the user.");
                         // Revert the view back to its original state
                         // by putting the user object at the index
                         // it used to be.
 						this.users.splice(index, 0, user);
 					});
        }
    }*/

    deleteUser(user, e) {
        if (confirm("You are about to delete the user " + user.name + ", are you sure?")) {
            var  e = e || window.event;
            e.path[2].hidden = true;
            this._service.deleteUser(user.id)
                .subscribe(null,
                err => {
                    alert("Could not delete user")
                    e.path[2].hidden = false;
                });
        }
    }

}