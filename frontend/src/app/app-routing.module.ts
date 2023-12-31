import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CardsPageComponent} from "./modules/cards/pages";

const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    redirectTo:'learningpackage',
  },
  {
    path: 'cards',
    loadChildren: () => import('./modules/cards/cards.module').then(m => m.CardsModule),
  }, {
  path: 'learningpackage',
    loadChildren: () => import('./modules/learning-package/learning-package.module').then(m => m.LearningPackageModule)
  }
]

@NgModule({
 imports: [RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules
 })] ,
  exports: [RouterModule]
})
export class AppRoutingModule {}
