import { HomepageComponent } from './homepage/homepage.component';
import { PellmellComponent } from './pellmell/pellmell.component';
import { AppRoutingModule } from './app.router.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
    ChartComponent,
    HeaderComponent,
    FooterComponent,
    PellmellComponent,
    HomepageComponent 
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
