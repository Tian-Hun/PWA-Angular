import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public src:string = './assets/images/1.jpg';
  public idx:number = 1;
  public isNone:boolean = false;

  constructor() { }

  public next():void {
    if (this.isNone) {
      this.idx = 1;
      this.isNone = false;
    } else {
      this.idx += 1;
    }
    this.idx > 16 ? this.isNone = true : this.src = `../../assets/images/${this.idx}.jpg`;
  }

  ngOnInit() {
  }

}
