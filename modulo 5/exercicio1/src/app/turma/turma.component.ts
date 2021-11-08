import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  @Input() turma: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
