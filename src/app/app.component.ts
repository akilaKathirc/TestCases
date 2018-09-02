import { Component } from '@angular/core';
import {TitleService} from "./title.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private titleService: TitleService){}

  ngOnInit(): void {
    this.titleService.init();
  }
}
