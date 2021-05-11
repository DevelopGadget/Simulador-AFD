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

  public edges = [
    {
      id: 'a',
      source: '1',
      target: '2'
    },
    {
      id: 'b',
      source: '1',
      target: '3'
    },
    {
      id: 'c',
      source: '3',
      target: '4'
    },
    {
      id: 'd',
      source: '3',
      target: '5'
    },
    {
      id: 'e',
      source: '4',
      target: '5'
    },
    {
      id: 'f',
      source: '2',
      target: '3'
    }
  ];

  public nodes = [];

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
    this.getNodes();
  }

  public clearListProduct() {
    this.selecteds = [];
    this.selectedItems.next([]);
    this.valueTotal.next(0);
  }

  public getNodes() {
    this.nodes = Array.from({length: (this.valueTotal.value - 0) / 101}, (_, i) => {
      return {
        id: `${i * 100}`,
        label: '$ ${i * 100}'
      }
    });
  }

  public getEdges(){

  }

}
