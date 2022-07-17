import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exercise-one',
    templateUrl: './exercise-one.component.html',
    styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {

    activeElement?: 'video' | 'image' | 'article';
    clicks: string[] = [];


    public get bgColor(): string {
        return this.activeElement === 'video' ? 'red' : this.activeElement === 'image' ? 'blue' : 'green';
    }


    constructor() { }

    toggleEl(el: 'video' | 'image' | 'article') {
        this.activeElement = el;
        this.clicks.push(el)
    }

    getCount(el: string): number {
        return this.clicks.filter((clk) => el === clk).length;
    }

    ngOnInit(): void {
    }

}
