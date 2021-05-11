import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-fabs-buttons',
  templateUrl: './fabs-buttons.component.html',
  styleUrls: ['./fabs-buttons.component.scss']
})
export class FabsButtonsComponent implements OnInit {

  constructor(public readonly sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
