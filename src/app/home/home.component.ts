import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    public weatherData = ['123'];

    ngOnInit() {
    }

    public addTemp() {
        this.weatherData.push(Number((Math.random() * 100) + 1).toFixed(0) + '');
    }

}
