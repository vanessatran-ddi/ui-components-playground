import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { AngularComponentsModule } from "@abgov/angular-components";

import "@abgov/web-components";
import {AccordionComponent} from "../app/accordion/accordion.component";
import {AppRoutingModule} from "../app/app-routing.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppFooterComponent} from "../app/app-footer/app-footer.component";
import {AppHeaderComponent} from "../app/app-header/app-header.component";
import {BadgeComponent} from "../app/badge/badge.component";
import {ButtonComponent} from "../app/button-component/button.component";
import {ButtonGroupComponent} from "../app/button-group/button-group.component";
import {CalloutComponent} from "../app/callout/callout.component";
import {CheckboxComponent} from "../app/checkbox/checkbox.component";
import {ChipComponent} from "../app/chip/chip.component";
import {CircularProgressComponent} from "../app/circular-progress/circular-progress.component";
import {ContainerComponent} from "../app/container/container.component";
import {DetailComponent} from "../app/detail/detail";
import {DividerComponent} from "../app/divider/divider.component";
import {DropdownComponent} from "../app/dropdown/dropdown.component";
import {FileUploadComponent} from "../app/file-upload/file-upload";
import {FormItemComponent} from "../app/form-item/form-item.component";
import {FormStepperComponent} from "../app/form-stepper/form-stepper.component";
import {GridComponent} from "../app/grid/grid";
import {HeroBannerComponent} from "../app/hero-banner/hero-banner.component";
import {IconButtonComponent} from "../app/icon-button/icon-button.component";
import {IconComponent} from "../app/icon/icon.component";
import {InputComponentComponent} from "../app/input-component/input-component.component";
import {MicrositeHeaderComponent} from "../app/microsite-header/microsoft-header.component";
import {ModalComponent} from "../app/modal/modal.component";
import {NavigationLinkComponent} from "../app/navigation-link/navigation-link.component";
import {
  NotificationBannerComponent
} from "../app/notification-banner/notification-banner.component";
import {PaginateComponent} from "../app/paginate/paginate";
import {PopoverComponent} from "../app/popover/popover.component";
import {RadioComponent} from "../app/radio/radio.component";
import {SideMenuComponent} from "../app/sidemenu/sidemenu.component";
import {SkeletonComponent} from "../app/skeleton/skeleton.component";
import {SpacingComponent} from "../app/spacing/spacing";
import {StylesComponent} from "../app/styles/styles.component";
import {TableComponent} from "../app/table/table";
import {TextAreaComponent} from "../app/text-area/text-area.component";
import {ThreeColumnLayoutComponent} from "../app/three-column-layout/three-column-layout.component";
import {TooltipComponent} from "../app/tooltip/tooltip.component";
import {TwoColumnLayoutComponent} from "../app/two-column-layout/two-column-layout.component";
import {TabsComponent} from "../app/tabs/tabs";
import { PrivacyPortalComponent } from "../app/privacy-portal-component/privacy-portal.component";
import {NgForOf, NgIf} from "@angular/common";
import {
  FormStepperIssue2375Component,
} from "../app/form-stepper/bugs/form-stepper-issue-2375.component";

// ******
// Routes
// ******

// import { AccordionComponent } from "./accordion/.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularComponentsModule,
    NgForOf,
    NgIf,
    // Standalone components
    AccordionComponent,
    AppFooterComponent,
    AppHeaderComponent,
    BadgeComponent,
    ButtonComponent,
    ButtonGroupComponent,
    CalloutComponent,
    CheckboxComponent,
    ChipComponent,
    CircularProgressComponent,
    ContainerComponent,
    DetailComponent,
    DividerComponent,
    DropdownComponent,
    FileUploadComponent,
    FormItemComponent,
    FormStepperComponent,
    FormStepperIssue2375Component,
    GridComponent,
    HeroBannerComponent,
    IconButtonComponent,
    IconComponent,
    InputComponentComponent,
    MicrositeHeaderComponent,
    ModalComponent,
    NavigationLinkComponent,
    NotificationBannerComponent,
    PaginateComponent,
    PopoverComponent,
    PrivacyPortalComponent,
    RadioComponent,
    SideMenuComponent,
    SkeletonComponent,
    SpacingComponent,
    StylesComponent,
    TableComponent,
    TabsComponent,
    TextAreaComponent,
    ThreeColumnLayoutComponent,
    TooltipComponent,
    TwoColumnLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
