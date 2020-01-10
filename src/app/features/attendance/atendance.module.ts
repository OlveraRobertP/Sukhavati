import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { AttendanceRoutingModule } from 'src/app/features/attendance/atendance-routing.module';
import { AttendanceListComponent } from 'src/app/features/attendance/attendance-list/attendance-list.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AttendanceListComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    AttendanceRoutingModule,
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
export class AttendanceModule { }
