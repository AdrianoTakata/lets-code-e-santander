import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rebimboca',
  templateUrl: './rebimboca.component.html',
  styleUrls: ['./rebimboca.component.css']
})
export class RebimbocaComponent implements OnInit {

  @Input() text: string = '';
  // text = "is awesome!";

  constructor() { }

  ngOnInit(): void {
  }

}
