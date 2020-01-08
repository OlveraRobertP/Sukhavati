import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { DashboardRoutingModule } from 'src/app/features/dashboard/dashboard.routing';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    })
  ],
  declarations: [DashboardComponent],  
  exports:[TranslateModule]
})
export class DashboardModule { }