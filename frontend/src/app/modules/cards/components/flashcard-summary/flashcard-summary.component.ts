import {Component, Input, OnInit} from '@angular/core';
import {CardsModel} from "../../../../models/cards.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CardsService} from "../../service/cards-service";

@Component({
  selector: 'app-flashcard-summary',

  templateUrl: './flashcard-summary.component.html',
  styleUrl: './flashcard-summary.component.scss'
})
export class FlashcardSummaryComponent implements OnInit {
  @Input() recto: string = 'Question'
  @Input() verso: string = 'Answer'
  @Input() packageName: string = 'Anglais'
  @Input() id: string = ''

  constructor(
    private cardService: CardsService
  ) {
  }

  ngOnInit() {

  }

  deleteCard() {
    console.log(this.id)
    this.cardService.delete(this.id)
      .subscribe(data => {
        console.log('deleted')
      })


    this.cardService.getFacts()
      .subscribe(data => {
        const currentPackageName = localStorage.getItem('currentPackageName');
        if(currentPackageName) {
          localStorage.setItem('currentPackage', JSON.stringify(this.filterData(data, currentPackageName)));
          window.location.reload();
        }

      })


  }

  filterData(data: CardsModel[], filter: string) {
    return data.filter(el => el.packageName === filter)
  }
}
