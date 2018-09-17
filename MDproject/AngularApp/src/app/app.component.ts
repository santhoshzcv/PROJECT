import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){

  }
  show=true;
  show1=false;

  
  Table(){
    this.show=false;
    this.router.navigate(['/table']);
    this.show1=true;
  }
  Form(){
    this.show1=false;
    this.show=true;
  }

}
