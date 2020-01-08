import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentListComponent } from 'src/app/features/payment/payment-list/payment-list.component';
import { PaymentDetailComponent } from 'src/app/features/payment/payment-detail/payment-detail.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'payments-list',
        pathMatch: 'full'
    },
    {
        path: 'payments-list',
        component: PaymentListComponent
    },
    {
        path: 'payments-detail',
        component: PaymentDetailComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }
