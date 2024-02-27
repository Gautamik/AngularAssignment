import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    user: { name: string, email: string } = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
    newName: string = '';
    showDetails: boolean = false;
    nameInput: any; // Define nameInput property

    toggleDetails() {
        this.showDetails = !this.showDetails;
    }

    editUser() {
        console.log('Edit button clicked!');
        // You can add your edit functionality here
    }
}
