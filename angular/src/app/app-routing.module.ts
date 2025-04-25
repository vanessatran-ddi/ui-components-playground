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
import { Issue2455Component } from "playground/angular/src/app/issues/2455/issue-2455.component";
import { Issue2441Component } from "playground/angular/src/app/issues/2441/issue-2441.component";

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
  { path: "2455", component: Issue2455Component},
  { path: "2441", component: Issue2441Component},
  { path: "", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
