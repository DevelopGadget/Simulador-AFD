import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-display-money',
  templateUrl: './display-money.component.html',
  styleUrls: ['./display-money.component.scss']
})
export class DisplayMoneyComponent implements OnInit {

  constructor(public readonly sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
