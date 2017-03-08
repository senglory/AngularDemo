import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AdvancedDemoComponent } from './app.component';
//import { NgUploaderModule } from 'ngx-uploader';

@NgModule({
    imports: [BrowserModule, FormsModule
    //    , NgUploaderModule
    ],
    declarations: [AdvancedDemoComponent],
    bootstrap: [AdvancedDemoComponent]
})
export class AppModule {
    constructor() {
        alert("APP.MODULE");
    }
}