import {RouterModule, Routes} from "@angular/router";
import {CardsPageComponent} from "./pages";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: CardsPageComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CardsRouterModule { }
