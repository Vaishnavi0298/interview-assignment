import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
// import { DualListBoxComponent } from './dual-list/dual-list.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { FormsModule } from '@angular/forms';
import { DualListBoxComponent } from './dual-list/dual-list.component';
import { CustomDualListComponent } from './custom-dual-list/custom-dual-list.component';
import { HttpClientModule } from '@angular/common/http';
// import { DualListBoxComponent } from './custom-dual-list/dual-list.component';
// import { DualListComponent } from './dual-list/dual-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    EmiCalculatorComponent,
    DualListBoxComponent,
    CustomDualListComponent,
    // DualListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularDualListBoxModule ,
    HttpClientModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
