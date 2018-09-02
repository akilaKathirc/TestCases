import { ModuleWithProviders } from '@angular/core'
import { Routes,RouterModule} from '@angular/router'
import { InllineEditingComponent } from './inlline-editing/inlline-editing.component';
import { KendoDDLComponent } from './kendo-ddl/kendo-ddl.component';
import { HideColumnComponent } from './hide-column/hide-column.component';

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
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash:true });