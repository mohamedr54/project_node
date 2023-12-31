import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CardsService} from "../../service/cards-service";
import {CardsModel} from "../../../../models/cards.model";

@Component({
  selector: 'app-flashcard-form',
  templateUrl: './flashcard-form.component.html',
  styleUrls: ['./flashcard-form.component.scss']
})

export class FlashcardFormComponent implements OnInit {
  flashCardForm: FormGroup<any>;
  packageNameValue: string = '';
  disabled: boolean = true;

  constructor(
    public fb: FormBuilder,
    private modalService: NgbModal,
    private cardsService: CardsService
  ) {

    this.flashCardForm = this.fb.group({
      packageName: [this.packageNameValue, Validators.required],
      recto: [null, Validators.required],
      verso: [null, Validators.required]
    })
  }

  ngOnInit() {

    const currentPackage = localStorage.getItem('currentPackage');
    if (currentPackage) {
      this.packageNameValue = JSON.parse(currentPackage)[0].packageName;
    }

    this.flashCardForm.patchValue({
      packageName: this.packageNameValue
    })
  }

  submitForm(form: FormGroup<any>) {
    const cardValue = form.value;
    if (form.valid) {
      this.cardsService.add(cardValue)
        .subscribe(data => {
          this.modalService.dismissAll();
          this.cardsService.getFacts();
        })
    }
    this.cardsService.getFacts()
      .subscribe(data => {
        const currentPackageName = localStorage.getItem('currentPackageName');
        if (currentPackageName) {
          localStorage.setItem('currentPackage', JSON.stringify(this.filterData(data, currentPackageName)))
          window.location.reload()

        }
      })
  }

  closeForm() {
    this.modalService.dismissAll();
  }

  filterData(data: CardsModel[], filter: string) {
    return data.filter(el => el.packageName === filter)
  }


}
