import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from 'src/app/features/student/student-list/student-list.component'
import { StudentDetailComponent } from 'src/app/features/student/student-detail/student-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'student-list', 
        pathMatch: 'full'
    },
    {
        path: 'student-list',
        component: StudentListComponent
    },
    {
        path: 'student-detail',
        component: StudentDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }
