import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public weatherData = [
        {
            'coord': {'lon': -71.06, 'lat': 42.36},
            'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
            'base': 'stations',
            'main': {'temp': 272.52, 'feels_like': 266.95, 'temp_min': 270.93, 'temp_max': 274.82, 'pressure': 1022, 'humidity': 86},
            'visibility': 10000,
            'wind': {'speed': 4.6, 'deg': 270},
            'clouds': {'all': 1},
            'dt': 1607669789,
            'sys': {'type': 1, 'id': 4967, 'country': 'US', 'sunrise': 1607688234, 'sunset': 1607721109},
            'timezone': -18000,
            'id': 4930956,
            'name': 'Boston',
            'cod': 200
        },
        {
            'coord': {'lon': 7.42, 'lat': 43.73},
            'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
            'base': 'stations',
            'main': {'temp': 278.44, 'feels_like': 272.78, 'temp_min': 276.48, 'temp_max': 279.82, 'pressure': 1006, 'humidity': 65},
            'visibility': 10000,
            'wind': {'speed': 5.1, 'deg': 340},
            'clouds': {'all': 75},
            'dt': 1607670863,
            'sys': {'type': 1, 'id': 6515, 'country': 'MC', 'sunrise': 1607669664, 'sunset': 1607701997},
            'timezone': 3600,
            'id': 2993457,
            'name': 'Monaco',
            'cod': 200
        },
        {
            'coord': {'lon': 4.89, 'lat': 52.37},
            'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
            'base': 'stations',
            'main': {'temp': 274.63, 'feels_like': 267.52, 'temp_min': 274.15, 'temp_max': 274.82, 'pressure': 993, 'humidity': 86},
            'visibility': 10000,
            'wind': {'speed': 7.2, 'deg': 130},
            'clouds': {'all': 75},
            'dt': 1607670216,
            'sys': {'type': 1, 'id': 1524, 'country': 'NL', 'sunrise': 1607672449, 'sunset': 1607700427},
            'timezone': 3600,
            'id': 2759794,
            'name': 'Amsterdam',
            'cod': 200
        },
        {
            'coord': {'lon': -0.13, 'lat': 51.51},
            'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04n'}],
            'base': 'stations',
            'main': {'temp': 282.44, 'feels_like': 280.21, 'temp_min': 282.04, 'temp_max': 283.15, 'pressure': 986, 'humidity': 93},
            'visibility': 10000,
            'wind': {'speed': 2.6, 'deg': 170},
            'clouds': {'all': 90},
            'dt': 1607670329,
            'sys': {'type': 1, 'id': 1414, 'country': 'GB', 'sunrise': 1607673393, 'sunset': 1607701893},
            'timezone': 0,
            'id': 2643743,
            'name': 'London',
            'cod': 200
        },
        {
            'coord': {'lon': -122.42, 'lat': 37.77},
            'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04n'}],
            'base': 'stations',
            'main': {'temp': 282.6, 'feels_like': 274.9, 'temp_min': 280.37, 'temp_max': 284.26, 'pressure': 1021, 'humidity': 81},
            'visibility': 10000,
            'wind': {'speed': 9.8, 'deg': 280},
            'clouds': {'all': 75},
            'dt': 1607670646,
            'sys': {'type': 1, 'id': 5817, 'country': 'US', 'sunrise': 1607613290, 'sunset': 1607647860},
            'timezone': -28800,
            'id': 5391959,
            'name': 'San Francisco',
            'cod': 200
        },
        {
            'coord': {'lon': 37.62, 'lat': 55.75},
            'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
            'base': 'stations',
            'main': {'temp': 264.82, 'feels_like': 259.56, 'temp_min': 264.15, 'temp_max': 265.37, 'pressure': 1032, 'humidity': 78},
            'visibility': 10000,
            'wind': {'speed': 3, 'deg': 120},
            'clouds': {'all': 0},
            'dt': 1607670492,
            'sys': {'type': 1, 'id': 9029, 'country': 'RU', 'sunrise': 1607665764, 'sunset': 1607691396},
            'timezone': 10800,
            'id': 524901,
            'name': 'Moscow',
            'cod': 200
        }
    ];


    constructor() {
    }

    ngOnInit() {
    }


}

