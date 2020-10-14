import { Component, VERSION, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {

    name = 'Angular ' + VERSION.major;
    public data: object[];

    public pageSettings: PageSettingsModel;
    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageSize: 6 };
    }
}