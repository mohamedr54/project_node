import {Component, OnInit} from '@angular/core';
import {CardsService} from "../../service/cards-service";

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit{
  public dataSource:any;
  constructor(
    private cardService: CardsService
  ) {}
  ngOnInit() {

  }
}
