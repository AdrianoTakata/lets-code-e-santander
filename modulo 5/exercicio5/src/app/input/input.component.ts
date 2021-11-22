import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  nameDog: string = '';
  linkImage: string[] = [];
  loading: boolean = true;
  error: boolean = true;

  constructor(private appService: AppService) {}

  getName(event: any) {
    this.nameDog = event.target.value;
    this.loading = false;
    this.error = true;
    return this.appService.getImageDog(this.nameDog).subscribe(
      (x) => {
        this.linkImage = x['message'];
        this.loading = true;  
    },
      (err) => {
        if (err){
          this.error = false;
        }
      }
    )
  }

}
