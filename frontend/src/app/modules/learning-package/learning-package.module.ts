import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LearningPackagePageComponent} from "./pages/learning-package-page/learning-package-page.component";
import {
  LearningPackageListingComponent
} from "./components/learning-package-listing/learning-package-listing.component";
import {HttpClientModule} from "@angular/common/http";
import {CardsRouterModule} from "../cards/cards-router.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LearningPackageRoutingModule} from "./learning-package-routing.module";
import {
  LearningPackageSummaryComponent
} from "./components/learning-package-summary/learning-package-summary.component";
import {LearningPackageFormComponent} from "./components/learning-package-form/learning-package-form.component";



@NgModule({
  declarations: [
    LearningPackagePageComponent,
    LearningPackageListingComponent,
    LearningPackageSummaryComponent,
    LearningPackageFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LearningPackageRoutingModule
  ]
})
export class LearningPackageModule { }
