import { sampleCustomers } from './../Shared/customers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-column',
  templateUrl: './hide-column.component.html',
  styleUrls: ['./hide-column.component.css']
})
export class HideColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public gridData: any[] = sampleCustomers;

  public columns: string[] = [
    'CompanyName', 'ContactName', 'ContactTitle'
  ];

  public hiddenColumns: string[] = [];

  public restoreColumns(): void {
      this.hiddenColumns = [];
  }

  public hideColumn(field: string): void {
    console.log(field);
    //  this.hiddenColumns.push(field);
  }

}
