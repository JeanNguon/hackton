import { TimelineComponent } from './timeline/timeline.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { ChartComponent } from "./charts/chart.component";
import { PellmellComponent } from "./pellmell/pellmell.component";
import { XlsxFileUploadComponent } from "./xlsx-file-upload/xlsx-file-upload.component";


const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    {
        path: 'homepage',
        component: HomepageComponent
    },
    {
        path: 'pellmell',
        children: [
            { path: "", component: PellmellComponent },
            { path: 'detail/:id', component: PellmellComponent },
            { path: 'form', component: PellmellComponent }
        ]
    },

    {
        path: 'charts',
        children: [
            { path: '', component: ChartComponent },
            { path: ':id', component: ChartComponent },
        ]
    },
    {
        path: 'excel',
        children: [
            { path: '', component: XlsxFileUploadComponent },
            { path: ':id', component: XlsxFileUploadComponent },
        ]
    },
    {
        path: 'timeline',
        children: [
            { path: '', component: TimelineComponent },
            { path: ':id', component: TimelineComponent },
        ]
    }

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
