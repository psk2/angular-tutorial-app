import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Input } from '@angular/core';
import { AppComponent } from './app.component';
import { NewServiceService } from './new-service.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { AlertModule } from 'ngx-bootstrap';
import { StateDetailsComponent } from './state-details/state-details.component';
import { OrderByPipe } from './order-by.pipe';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';
import { FormsComponent } from './forms/forms.component';
import { FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { FormsNewComponent } from './forms-new/forms-new.component';
import { ParentComponent } from './parent/parent.component';
import { ChildParentComponent } from './parent/child-parent/child-parent.component';
import { CustomDirective } from './directives/custom.directive';
@NgModule({
  declarations: [
    AppComponent,
    StateDetailsComponent,
    OrderByPipe,
    HomeComponent,
    StatesComponent,
    FormsComponent,
    FormsNewComponent,
    ParentComponent,
    ChildParentComponent,
    CustomDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
