import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/models/catalog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(public readonly sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onClickEvent(item: Catalog) {   
    if(!this.sharedService.isDisabledProduct){
      this.sharedService.addProduct(item);
    } 
  }

}
