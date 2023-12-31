import {Component, OnInit} from '@angular/core';
import {LearningPackageService} from "../../service/learning-package-service";
import {CardsModel} from "../../../../models/cards.model";
import {LearningPackages} from "../../../../models/learning-package.model";
import {CardsService} from "../../../cards/service/cards-service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LearningPackageFormComponent} from "../learning-package-form/learning-package-form.component";

@Component({
  selector: 'app-learning-package-listing',
  templateUrl: './learning-package-listing.component.html',
  styleUrl: './learning-package-listing.component.scss'
})
export class LearningPackageListingComponent implements OnInit {
  public dataSource: any
  public packages: LearningPackages = {};
  public editMode: boolean = false;
  constructor(
    private service: LearningPackageService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit() {
    this.dataSource = this.service.getPackages()
      .subscribe(data => {
        this.dataSource = data;
      })
  }


  openModal() {
    this.modalService.open(LearningPackageFormComponent, {size: "lg"})
  }


}
