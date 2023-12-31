import {Component, Injectable, OnInit} from '@angular/core';
import {CardsService} from "../../service/cards-service";
import {CardsModel} from "../../../../models/cards.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FlashcardFormComponent} from "../flashcard-form/flashcard-form.component";

@Component({
  selector: 'app-flashcard-listing',
  templateUrl: './flashcard-listing.component.html',
  styleUrl: './flashcard-listing.component.scss'
})

@Injectable({
  providedIn: 'root'
})
export class FlashcardListingComponent implements OnInit {
  public dataSource: any;
  public isRecto: boolean = true
  public showAnswer: boolean = false;
  public currentCard: number = 0;
  public dataSourceLength: number = 0;
  public editMode: boolean = false;

  constructor(
    private cardService: CardsService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    const dataSourceBuffer = localStorage.getItem('currentPackage');
    if(dataSourceBuffer !== null) {
      this.dataSource = JSON.parse(dataSourceBuffer);
      this.dataSourceLength = this.dataSource.length
    }
  }

  changeFace(): void {
    this.isRecto = !this.isRecto;
    this.showAnswer = true;
  }

  nextCard() {
    this.currentCard++;
    this.isRecto = true;
    this.showAnswer = false;
  }

  openModal() {
    this.modalService.open(FlashcardFormComponent, {size: "lg"});
  }
}
