import {RouterModule, Routes} from "@angular/router";
import {LearningPackagePageComponent} from "./pages/learning-package-page/learning-package-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: LearningPackagePageComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LearningPackageRoutingModule { }
