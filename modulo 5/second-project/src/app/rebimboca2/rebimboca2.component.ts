import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rebimboca2',
  templateUrl: './rebimboca2.component.html',
  styleUrls: ['./rebimboca2.component.css']
})
export class Rebimboca2Component implements OnInit {

  @Output() textEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.textEmitter.emit('parafuseta');
  }

}
