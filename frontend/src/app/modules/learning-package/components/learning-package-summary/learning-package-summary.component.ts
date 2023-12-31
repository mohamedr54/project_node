import {Component, Input, OnInit} from '@angular/core';
import {LearningPackageModel} from "../../../../models/learning-package.model";
import {LearningPackageService} from "../../service/learning-package-service";
import {CardsModel} from "../../../../models/cards.model";
import {CardsService} from "../../../cards/service/cards-service";

@Component({
  selector: 'app-learning-package-summary',

  templateUrl: './learning-package-summary.component.html',
  styleUrl: './learning-package-summary.component.scss'
})
export class LearningPackageSummaryComponent implements OnInit {
  @Input() difficulty: number = 0;
  @Input() description: string = '';
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() id: string = '';
  // @Input() cardData: LearningPackageModel[] = [{
  //   id: '',
  //   category: '',
  //   description: '',
  //   title: '',
  //   difficulty: 0
  // }]
  @Input() editMode: boolean = false;

  public cardData: CardsModel[] = []

  constructor(
    private service: CardsService,
    private packageService: LearningPackageService
  ) {
  }

  ngOnInit() {

  }

  filterPackage(title: string) {
    const packages = this.service.getFacts()
      .subscribe((data) => {
        this.cardData = data;
        if (this.cardData.filter(element => element.packageName === title).length > 0) {
          const currentPackage = this.cardData.filter(element => element.packageName === title)
          localStorage.setItem('currentPackage', JSON.stringify(currentPackage))
          localStorage.setItem('currentPackageName', currentPackage[0].packageName);
          window.location.reload()
        } else {
          localStorage.setItem('currentPackage', JSON.stringify([{packageName: title}]))
          localStorage.setItem('currentPackageName', title)


        }

      })

  }

  deletePackage() {
    console.log(this.id)
    this.packageService.delete(this.id)
      .subscribe(data => {
        console.log('deleted')
        this.packageService.getPackages();
        window.location.reload()
      })

  }




}
