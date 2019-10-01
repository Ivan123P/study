import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  public visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public show(): void {
    this.visible = true;
  }
}
