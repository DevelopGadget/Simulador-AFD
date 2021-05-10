import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-buttons-money',
  templateUrl: './buttons-money.component.html',
  styleUrls: ['./buttons-money.component.scss'],
})
export class ButtonsMoneyComponent implements OnInit {

  constructor(public readonly sharedService: SharedService) {}

  ngOnInit(): void {}
}
