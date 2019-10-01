import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  public sameData = {
    name: 'Ivan'
  };

  constructor() { }

  ngOnInit() {
  }

  public test(event: number): void {
    console.log(event);
  }

}
