import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Catalog } from '../models/catalog';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public catalog: BehaviorSubject<Array<Catalog>> = new BehaviorSubject([]);
  public selectedItems: BehaviorSubject<Array<Catalog>> = new BehaviorSubject([]);
  public valueTotal: BehaviorSubject<number> = new BehaviorSubject(0);
  public selecteds: Array<Catalog> =[];

  public coins:  BehaviorSubject<Array<Catalog>> = new BehaviorSubject([]);

  constructor(private readonly http: HttpClient) { }

  public loadCatalog() {
    this.http.get<Array<Catalog>>('assets/catalog.json').subscribe(res => {
      this.catalog.next(res);
    });
  }

  public loadCoins() {
    this.http.get<Array<Catalog>>('assets/coins.json').subscribe(res => {
      this.coins.next(res);
    });
  }

  public get isDisabledProduct(): boolean {return this.selecteds.length >= 5}

  public get isContainProduct(): boolean {return this.selecteds.length > 0}

  public addProduct(item: Catalog) {
    this.selecteds.push(item);
    this.selectedItems.next(this.selecteds);
    this.valueTotal.next(this.valueTotal.value + item.Value);
  }

  public clearListProduct() {
    this.selecteds = [];
    this.selectedItems.next([]);
    this.valueTotal.next(0);
  }

}
