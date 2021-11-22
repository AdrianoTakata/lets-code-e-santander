import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-attribute',
  templateUrl: './select-attribute.component.html',
  styleUrls: ['./select-attribute.component.css']
})
export class SelectAttributeComponent implements OnInit {

  selectedValue: string = '';
  @Output() selectedAttribute = new EventEmitter<string>();

  status: Status[] = [
    { value: 'life', viewValue: 'Life' },
    { value: 'attack', viewValue: 'Attack' },
    { value: 'defense', viewValue: 'Defense' },
    { value: 'speed',  viewValue: 'Speed' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedValue() {
    console.log(this.selectedValue);
    this.selectedAttribute.emit(this.selectedValue);
  }

}
