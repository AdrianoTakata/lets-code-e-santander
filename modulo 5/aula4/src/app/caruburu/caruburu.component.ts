import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caruburu',
  templateUrl: './caruburu.component.html',
  styleUrls: ['./caruburu.component.scss']
})
export class CaruburuComponent implements OnInit {

  userId: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot)
    this.userId = this.route.snapshot.params['id'];
    console.log(this.userId);
  }

}
