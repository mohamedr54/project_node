import {Component, Input, OnInit} from '@angular/core';
import {CardsModel} from "../../../../models/cards.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss'
})
export class FlashcardComponent implements OnInit {
  //@Input() cardData: CardsModel[] = [{id: '', recto:'', verso:'', packageName:''}]
  @Input() isRecto: boolean = true
  @Input() currentCard: number = 0;
  public data: CardsModel[] = [{id: '', recto: '', verso: '', packageName: ''}]

  constructor() {
  }

  ngOnInit() {

    const buff = (localStorage.getItem('currentPackage'))
    if (buff !== null) {
      this.data = JSON.parse(buff)
    }

  }
}
