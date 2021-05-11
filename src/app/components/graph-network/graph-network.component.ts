import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-graph-network',
  templateUrl: './graph-network.component.html',
  styleUrls: ['./graph-network.component.scss']
})
export class GraphNetworkComponent implements OnInit {

  constructor(public readonly sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
