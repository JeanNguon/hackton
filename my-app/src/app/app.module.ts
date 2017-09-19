import { ChartComponent } from './charts/chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XlsxFileUploadComponent } from "./xlsx-file-upload/xlsx-file-upload.component";
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    XlsxFileUploadComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
