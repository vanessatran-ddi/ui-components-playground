import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularComponentsModule } from '@abgov/angular-components';

// Import routes from app-routing.module
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      NoopAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      AngularComponentsModule,
      AppRoutingModule
    )
  ]
}).catch(err => console.error(err));
