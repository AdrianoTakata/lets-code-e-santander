import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-hobbie',
  templateUrl: './cards-hobbie.component.html',
  styleUrls: ['./cards-hobbie.component.css']
})
export class CardsHobbieComponent implements OnInit {

  @Input() hobbie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
