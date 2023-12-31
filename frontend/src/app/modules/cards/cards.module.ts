import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsPageComponent} from "./pages";
import {CardsRouterModule} from "./cards-router.module";
import {FlashcardComponent} from "./components/flashcard/flashcard.component";
import {HttpClientModule} from "@angular/common/http";
import {FlashcardListingComponent} from "./components/flashcard-listing/flashcard-listing.component";
import {FlashcardFormComponent} from "./components/flashcard-form/flashcard-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlashcardSummaryComponent} from "./components/flashcard-summary/flashcard-summary.component";



@NgModule({
    declarations: [
        CardsPageComponent,
        FlashcardComponent,
        FlashcardListingComponent,
        FlashcardFormComponent,
        FlashcardSummaryComponent
    ],
    exports: [
        FlashcardComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardsRouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CardsModule { }
