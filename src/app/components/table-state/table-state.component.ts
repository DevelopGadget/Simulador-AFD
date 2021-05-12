import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-table-state',
  templateUrl: './table-state.component.html',
  styleUrls: ['./table-state.component.scss']
})
export class TableStateComponent implements OnInit {

  public displayedColumns: string[] = ['Estado', '$100', '$200', '$500', '$1000']

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
