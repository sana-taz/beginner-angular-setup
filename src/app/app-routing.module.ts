import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { ComponentinterComponent } from './componentinter/componentinter.component';
import { EventhandlingComponent } from './eventhandling/eventhandling.component';
import { HttprequestComponent } from './httprequest/httprequest.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertyComponent } from './property/property.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { TestComponent } from './test/test.component';
import { TwowayComponent } from './twoway/twoway.component';

const routes: Routes = [
  {path:"architecture", component: ArchitectureComponent},
  {path:"directives", component: DirectivesComponent},
  {path:"classbinding", component: ClassbindingComponent},
  {path:"compnentinter", component: ComponentinterComponent},
  {path:"eventhandling", component: EventhandlingComponent},
  {path:"httprequest", component: HttprequestComponent},
  {path:"interpolation", component: InterpolationComponent},
  {path: "pipes", component: PipesComponent},
  {path: "property",component: PropertyComponent},
  {path:"stylebinding",component: StylebindingComponent},
  {path:"test", component: TestComponent},
  {path:"twoway", component: TwowayComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArchitectureComponent,DirectivesComponent,ClassbindingComponent,ComponentinterComponent,EventhandlingComponent,HttprequestComponent,InterpolationComponent,PipesComponent,PropertyComponent,StylebindingComponent,TestComponent,TwowayComponent]
