import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AccordionComponent } from "./components/accordion/accordion.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { BadgeComponent } from "./components/badge/badge.component";
import { ButtonComponent } from "./components/button-component/button.component";
import { ButtonGroupComponent } from "./components/button-group/button-group.component";
import { Bug1734 } from "./components/bugs/bug-1734";
import { CalloutComponent } from "./components/callout/callout.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { CheckboxListComponent } from "./components/checkbox-list/checkbox-list.component";
import { ChipComponent } from "./components/chip/chip.component";
import { CircularProgressComponent } from "./components/circular-progress/circular-progress.component";
import { ColumnLayoutComponent } from "./components/column-layout/column-layout.component";
import { ComponentWrapperPage } from "./component-wrapper";
import { ContainerComponent } from "./components/container/ContainerComponent";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { DetailComponent } from "./components/detail/detail";
import { DividerComponent } from "./components/divider/divider.component";
import { DrawerComponent } from "./components/drawer/drawer.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { FileUploadComponent } from "./components/file-upload/file-upload";
import { FormItemComponent } from "./components/form-item/form-item.component";
import { FormStepperComponent } from "./components/form-stepper/form-stepper.component";
import { GridComponent } from "./components/grid/grid";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";
import { IconComponent } from "./components/icon/icon.component";
import { IconButtonComponent } from "./components/icon-button/icon-button.component";
import { InputComponentComponent } from "./components/input-component/input-component.component";
import { Issue2003Component } from "./issues/2003/issue-2003.component";
import { Issue2365Component } from "./issues/2365/issue-2365.component";
import { Issue2466Component } from "./issues/2466/issue-2466.component";
import { Issue2513Component } from "./issues/2513/issue-2513.component";
import { MicrositeHeaderComponent } from "./components/microsite-header/microsoft-header.component";
import { ModalComponent } from "./components/modal/modal.component";
import { NavigationLinkComponent } from "./components/navigation-link/navigation-link.component";
import { NotificationBannerComponent } from "./components/notification-banner/notification-banner.component";
import { PaginateComponent } from "./components/paginate/paginate";
import { PopoverComponent } from "./components/popover/popover.component";
import { RadioComponent } from "./components/radio/radio.component";
import { SideMenuComponent } from "./components/sidemenu/sidemenu.component";
import { SkeletonComponent } from "./components/skeleton/skeleton.component";
import { SpacingComponent } from "./components/spacing/spacing";
import { StylesComponent } from "./components/styles/styles.component";
import { TableComponent } from "./components/table/table";
import { TabsComponent } from "./components/tabs/tabs";
import { TextAreaComponent } from "./components/text-area/text-area.component";
import { ThreeColumnLayoutComponent } from "./components/three-column-layout/three-column-layout.component";
import { TooltipComponent } from "./components/tooltip/tooltip.component";
import { TwoColumnLayoutComponent } from "./components/two-column-layout/two-column-layout.component";
import { Issue2433Component } from "./issues/2433/issue-2433.component";
import { Issue2471Component } from "./issues/2471/issue-2471.component";
import { TemporaryNotificationComponent } from "./components/temporary-notification/temporary-notification.component";
import { TextComponent } from "./components/text/text.component";
import { Issue1219Component } from "./issues/1219/issue-1219.component";
import { Issue2415Component} from "./issues/2415/issue-2415.component";
import { PublicFormComponent } from "./public-form/public-form.component";
import { Issue2409Component } from "./issues/2409/issue-2409.component";
import { Issue2662Component } from "./issues/2662/issue-2662.component";
import { Issue2408Component } from "./issues/2408/issue-2408.component";
import { Issue2693Component } from "./issues/2693/issue-2693.component";
import { Issue2395Component } from "./issues/2395/issue-2395.component";
import { Issue2410Component } from "./issues/2410/issue-2410.component";
import { Issue1849Component } from "./issues/1849/issue-1849.component";
import { Issue1572Component} from "./issues/1572/issue-1572.component";
import { Issue1216Component } from "./issues/1216/issue-1216.component";
import { Issue2404Component } from "./issues/2404/issue-2404.component";
import { Issue2789Component } from "./issues/2789/issue-2789.component";
import { PublicFormNavigationTestComponent } from "./public-form/public-form-navigation-test.component";
import { PublicFormAccessibilityTestComponent } from "./public-form/public-form-accessibility-test.component";
import { Issue1769Component } from "./issues/1769/issue-1769.component";
import { Issue2772Component } from "./issues/2772/issue-2772.component";
import { Issue2768Component } from "./issues/2768/issue-2768.component";
import { PublicFormSubFormExampleComponent } from "./public-form/PublicFormSubFormExample";
import { Issue2827Component } from "./public-form/issue-2827/issue-2827.component";
import { Issue2827SubformComponent } from "./public-form/issue-2827/issue-2827-subform.component";
import { SupportOrderDetailsComponent } from "./public-form/SupportOrderDetails";
import { Issue2720Component } from "./issues/2720/issue-2720.component";
import { Issue2829Component } from "./issues/2829/issue-2829.component";
import {
  PublicFormWithCheckboxComponent
} from "./public-form/public-form-with-checkbox.component";


const routes: Routes = [
  { path: "bug-1734", component: Bug1734 },
  { path: "badge-wrapper", component: ComponentWrapperPage },
  { path: "accordion", component: AccordionComponent },
  { path: "app-footer", component: AppFooterComponent },
  { path: "app-header", component: AppHeaderComponent },
  { path: "badge", component: BadgeComponent },
  { path: "button", component: ButtonComponent },
  { path: "button-group", component: ButtonGroupComponent },
  { path: "callout", component: CalloutComponent },
  { path: "checkbox", component: CheckboxComponent },
  { path: "checkbox-list", component: CheckboxListComponent },
  { path: "chip", component: ChipComponent },
  { path: "circular-progress", component: CircularProgressComponent },
  { path: "column-layout", component: ColumnLayoutComponent },
  { path: "container", component: ContainerComponent },
  { path: "date-picker", component: DatePickerComponent },
  { path: "detail", component: DetailComponent },
  { path: "divider", component: DividerComponent },
  { path: "drawer", component: DrawerComponent },
  { path: "dropdown", component: DropdownComponent },
  { path: "file-upload", component: FileUploadComponent },
  { path: "form-item", component: FormItemComponent },
  { path: "form-stepper", component: FormStepperComponent },
  { path: "grid", component: GridComponent },
  { path: "hero-banner", component: HeroBannerComponent },
  { path: "icon", component: IconComponent },
  { path: "icon-button", component: IconButtonComponent },
  { path: "input", component: InputComponentComponent },
  { path: "microsite-header", component: MicrositeHeaderComponent },
  { path: "modal", component: ModalComponent },
  { path: "navigation-link", component: NavigationLinkComponent },
  { path: "notification-banner", component: NotificationBannerComponent },
  { path: "paginate", component: PaginateComponent },
  { path: "popover", component: PopoverComponent },
  { path: "radio", component: RadioComponent },
  { path: "side-menu", component: SideMenuComponent },
  { path: "skeleton", component: SkeletonComponent },
  { path: "spacing", component: SpacingComponent },
  { path: "styles", component: StylesComponent },
  { path: "table", component: TableComponent },
  { path: "tabs", component: TabsComponent },
  { path: "temporary-notification", component: TemporaryNotificationComponent },
  { path: "text", component: TextComponent},
  { path: "textarea", component: TextAreaComponent },
  { path: "three-column-layout", component: ThreeColumnLayoutComponent },
  { path: "tooltip", component: TooltipComponent },
  { path: "two-column-layout", component: TwoColumnLayoutComponent },
  { path: "2365", component: Issue2365Component },
  { path: "2466", component: Issue2466Component },
  { path: "2003", component: Issue2003Component },
  { path: "2513", component: Issue2513Component },
  { path: "2433", component: Issue2433Component},
  { path: "2471", component: Issue2471Component},
  { path: "1219", component: Issue1219Component},
  { path: "2415", component: Issue2415Component},
  { path: "2409", component: Issue2409Component},
  { path: "2662", component: Issue2662Component},
  { path: "2693", component: Issue2693Component},
  { path: "2408", component: Issue2408Component},
  { path: "2395", component: Issue2395Component},
  { path: "2410", component: Issue2410Component},
  { path: "1849", component: Issue1849Component},
  { path: "1572", component: Issue1572Component},
  { path: "1216", component: Issue1216Component},
  { path: "2404", component: Issue2404Component},
  { path: "2789", component: Issue2789Component},
  { path: "1769", component: Issue1769Component},
  { path: "2768", component: Issue2768Component},
  { path: "2772", component: Issue2772Component},
  { path: "2720", component: Issue2720Component},
  { path: "2829",  component: Issue2829Component},
  { path: "public-form", component: PublicFormComponent},
  { path: "public-form-navigation", component: PublicFormNavigationTestComponent},
  { path: "public-form-accessibility", component: PublicFormAccessibilityTestComponent},
  { path: "support-order-details", component: SupportOrderDetailsComponent},
  { path: "public-form-subform-example", component: PublicFormSubFormExampleComponent},
  { path: "public-form/2827", component: Issue2827Component},
  { path: "public-form/2827-subform", component: Issue2827SubformComponent},
  { path: "support-order-details", component: SupportOrderDetailsComponent},
  { path: "public-form-checkbox-list", component: PublicFormWithCheckboxComponent},
  { path: "", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
