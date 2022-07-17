import { Component } from "@angular/core";

@Component({
    selector: 'app-student',
    styleUrls: ['./student.component.css'],
    templateUrl: './student.component.html',
})
export class StudentComponent {
    name = 'Nathaniel';

    get allowAdd(): boolean {
        return !this.name;
    }

    update() {
        this.name = 'Nathaniel Campbell'
    }
}