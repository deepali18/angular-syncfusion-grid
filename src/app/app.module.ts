import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports:      [ BrowserModule, FormsModule, GridModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PageService,
                SortService,
                FilterService,
                GroupService]
})
export class AppModule { }
