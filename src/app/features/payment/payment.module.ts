import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { PaymentRoutingModule } from 'src/app/features/payment/payment-routing.module';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component'


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [PaymentListComponent, PaymentDetailComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    PaymentRoutingModule,
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
export class PaymentModule { }
