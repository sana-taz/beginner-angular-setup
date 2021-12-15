import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BiggnercompComponent } from './biggnercomp/biggnercomp.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventhandlingComponent } from './eventhandling/eventhandling.component';
import { TwowayComponent } from './twoway/twoway.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentinterComponent } from './componentinter/componentinter.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HttprequestComponent } from './httprequest/httprequest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { OverviewComponent } from './overview/overview.component';
import { RoutingComponent } from './routing/routing.component';
import { FormComponent } from './form/form.component'
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReactiveComponent,
    BiggnercompComponent,
    ArchitectureComponent,
    InterpolationComponent,
    PropertyComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventhandlingComponent,
    TwowayComponent,
    DirectivesComponent,
    ComponentinterComponent,
    PipesComponent,
    HttprequestComponent,
    routingComponents,
    PageNotFoundComponent,
    UserDetailsComponent,
    OverviewComponent,
    RoutingComponent,
    FormComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
