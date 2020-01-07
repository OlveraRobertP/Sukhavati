import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from 'src/app/features/student/student.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { StudentRoutingModule } from './student-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    StudentRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  exports:[TranslateModule]
})
export class StudentModule { }
