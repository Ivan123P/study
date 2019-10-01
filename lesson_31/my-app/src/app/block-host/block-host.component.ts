import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { BlockComponent } from './block/block.component';

@Component({
  selector: 'app-block-host',
  templateUrl: './block-host.component.html',
  styleUrls: ['./block-host.component.scss']
})
export class BlockHostComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(BlockComponent) public block: QueryList<BlockComponent>;
  @ViewChild('inpName', {static: false}) public inputName: ElementRef<any>;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    // console.log(this.inputName);
    console.log('init');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  ngAfterViewInit() {
    console.log('afterviewinit');
    // console.log((this.inputName.nativeElement as HTMLInputElement).value = "3234");
  }

  public showBlock(): void {
    this.block.forEach( block => block.show() );
  }

}
