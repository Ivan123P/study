import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'sport-store';

  constructor( private dataService: DataService ) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((res: any) => {
      console.log(res);
    });
  }
}
