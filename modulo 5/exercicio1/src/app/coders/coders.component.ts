import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coders',
  templateUrl: './coders.component.html',
  styleUrls: ['./coders.component.css']
})
export class CodersComponent implements OnInit {

  @Output() textEmmiter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.textEmmiter.emit("SOU UM CODER");
  }

}
