import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import {
  AngularComponentsModule,
  GoabAppFooter,
  GoabAppHeader,
  GoabSideMenu,
  GoabSideMenuGroup,
} from "@abgov/angular-components";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { NgForOf, NgIf } from "@angular/common";
import { SupportOrderDetailsComponent } from "./public-form/SupportOrderDetails";
import { PublicFormSubFormExampleComponent } from "./public-form/PublicFormSubFormExample";

import "@abgov/web-components";

// ******
// Routes
// ******

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularComponentsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgForOf,
    NgIf,
    NoopAnimationsModule,
    ReactiveFormsModule,
    GoabSideMenu,
    GoabSideMenuGroup,
    GoabAppFooter,
    GoabAppHeader,
    PublicFormSubFormExampleComponent,
    SupportOrderDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
