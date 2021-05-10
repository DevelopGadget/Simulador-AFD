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

}
