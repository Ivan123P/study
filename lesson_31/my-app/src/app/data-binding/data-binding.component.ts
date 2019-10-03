import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public choice: string = '';

  public settings = {
    accent: false,
    error: false,
    highlighted: false
  };

  public img1: string = 'assets/img/tesla1.jpg';
  public img2: string = 'assets/img/tesla2.png';
  public res: string = this.img1;
  public flag: boolean = true;
  public borderClass: boolean = false;
  public bgClass: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleImage(): void {
    if ( this.res === this.img1 ) {
      this.res = this.img2;
    } else {
      this.res = this.img1;
    }

    // this.borderClass = !this.borderClass;
    // this.bgClass = !this.bgClass;
    this.flag = !this.flag;
  }

  public getClasses(): string {
    return 'border-my background italic';
  }
}
