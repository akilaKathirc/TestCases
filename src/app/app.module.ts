import { PopupAnchorDirective } from './Shared/popup.anchor-target.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsBindingDirective } from './products-binding.directive';
import { ProductsService } from './northwind.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TooltipDirective } from './tooltip.directive';
import { routing } from './app.routing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InllineEditingComponent } from './inlline-editing/inlline-editing.component';
import { CustomEditingComponent } from './custom-editing/custom-editing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { KendoDDLComponent } from './kendo-ddl/kendo-ddl.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {TitleService} from './title.service';
import 'hammerjs';
import { HideColumnComponent } from './hide-column/hide-column.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsBindingDirective,
    TooltipDirective,
    InllineEditingComponent,
    CustomEditingComponent,
    PopupAnchorDirective,
    KendoDDLComponent,
    HideColumnComponent
  ],  
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
  imports: [
    routing,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTooltipModule,DropDownsModule,
    PopupModule
  ],
  providers: [HttpClient,ProductsService,TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
