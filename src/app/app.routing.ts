import { ModuleWithProviders } from '@angular/core'
import { Routes,RouterModule} from '@angular/router'
import { InllineEditingComponent } from './inlline-editing/inlline-editing.component';
import { KendoDDLComponent } from './kendo-ddl/kendo-ddl.component';
import { HideColumnComponent } from './hide-column/hide-column.component';
import {AngularAimationsComponent} from './angular-aimations/angular-aimations.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { SecondchildComponent } from './secondchild/secondchild.component';



const routes: Routes = [{
    path: 'InllineEditing',
    component: InllineEditingComponent,
    data: {title: "Inlline Editing"},
  }, 
  {
    path: 'HideColumn',
    component: HideColumnComponent,
    data: {title: "Hide Column"}
  }, 
  {
    path: 'KendoDDL',
    component: KendoDDLComponent,
    data: {title: "Kendo DDL"}
  }, 
  {
    path: 'AngularAimations',
    component: AngularAimationsComponent,
    data: {title: "Angular Aimations"}
  },
  {path: 'home', component: HomeComponent},
  {path: 'second', component: SecondComponent, children: [
      {path: 'firstchildcomp', component: FirstchildComponent, outlet:'firstchild'},
      {path: ':id', component: SecondchildComponent, outlet:'secondchild'}
  ]},

];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash:true });