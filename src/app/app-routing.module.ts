import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DualListBoxComponent } from './dual-list/dual-list.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { CustomDualListComponent } from './custom-dual-list/custom-dual-list.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' }, 
  { path: 'counter', component: CounterComponent },
  { path: 'dual-list', component: CustomDualListComponent },
  { path: 'emi-calculator', component: EmiCalculatorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
