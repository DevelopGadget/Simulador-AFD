import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/models/catalog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  selectionProductDisabled: boolean = false;

  constructor(public readonly sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onClickEvent(item: Catalog) {
    const productCount = this.sharedService.selecteds.length;
    this.selectionProductDisabled = productCount >= 5;

    if(!this.selectionProductDisabled){
      this.sharedService.selecteds.push(item);
      this.sharedService.selectedItems.next(this.sharedService.selecteds);
    } else {
      window.alert('Ya ha seleccionado 5 productos')
    }

    console.log({item})
  }

}
