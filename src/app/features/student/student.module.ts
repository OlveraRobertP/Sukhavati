import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { StudentRoutingModule } from 'src/app/features/student/student-routing.module';
import { StudentListComponent } from 'src/app/features/student/student-list/student-list.component';
import { StudentDetailComponent } from 'src/app/features/student/student-detail/student-detail.component';
import { WebcamModule } from 'ngx-webcam';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    StudentRoutingModule,
    WebcamModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  exports: [TranslateModule]
})
export class StudentModule { }
