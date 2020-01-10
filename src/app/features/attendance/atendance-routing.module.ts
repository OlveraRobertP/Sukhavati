import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceListComponent } from 'src/app/features/attendance/attendance-list/attendance-list.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'attendance-list', 
        pathMatch: 'full'
    },
    {
        path: 'attendance-list',
        component: AttendanceListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttendanceRoutingModule { }
