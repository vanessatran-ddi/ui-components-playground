import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AngularComponentsModule } from "@abgov/angular-components";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { NavigationLinkComponent } from "./navigation-link/navigation-link.component";
import { StylesComponent } from "./styles/styles.component";
import { ThreeColumnLayoutComponent } from "./three-column-layout/three-column-layout.component";
import { TwoColumnLayoutComponent } from "./two-column-layout/two-column-layout.component";
import { Bug1734 } from "./bugs/bug-1734";
import { Bug1756 } from "./bugs/bug-1756";
import { NgForOf, NgIf } from "@angular/common";

import "@abgov/web-components";

// ******
// Routes
// ******

@NgModule({
  declarations: [
    Bug1734,
    Bug1756,
    AppComponent,
    NavigationLinkComponent,
    StylesComponent,
    ThreeColumnLayoutComponent,
    TwoColumnLayoutComponent,
  ],
  imports: [
    AngularComponentsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgForOf,
    NgIf,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
