import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Catalog } from '../models/catalog';
import { Node, Edge } from '@swimlane/ngx-graph';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../components/info-dialog/info-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public catalog: BehaviorSubject<Array<Catalog>> = new BehaviorSubject([]);
  public selectedItems: BehaviorSubject<Array<Catalog>> = new BehaviorSubject([]);
  public valueTotal: BehaviorSubject<number> = new BehaviorSubject(0);
  public selecteds: Array<Catalog> = [];

  public valueInputTotal: number = 0;

  public coins: BehaviorSubject<Array<Catalog>> = new BehaviorSubject([]);

  public edges: Array<Edge> = [];

  public nodes: Array<Node> = [];

  constructor(private readonly http: HttpClient, public readonly dialog: MatDialog) { }

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

  public get isDisabledProduct(): boolean { return this.selecteds.length >= 5 }

  public get isContainProduct(): boolean { return this.selecteds.length > 0 }

  public get isShowChart(): boolean { return this.nodes.length > 0 && this.edges.length > 0 }

  public addProduct(item: Catalog) {
    this.selecteds.push(item);
    this.selectedItems.next(this.selecteds);
    this.valueTotal.next(this.valueTotal.value + item.Value);
    this.getNodes();
    this.getEdges();
  }

  public clearListProduct() {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      autoFocus: false,
      disableClose: false,
      maxWidth: '456px',
      data: {
        Icon: 'help_outline',
        IconColor: 'primary',
        Title: '¿Esta seguro que desea cancelar todo el proceso?',
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.selecteds = [];
        this.selectedItems.next([]);
        this.valueTotal.next(0);
        this.nodes = [];
        this.edges = [];
        this.valueInputTotal = 0;
      }
    });

  }

  public getNodes() {
    this.nodes = Array.from({ length: (this.valueTotal.value / 100) + 1 }, (_, i) => {
      return {
        id: `${i * 100}`,
        label: `$${i * 100}`
      }
    });
  }

  public getEdges() {
    this.edges = [];
    this.getTableStateForStep(100);
    this.getTableStateForStep(200);
    this.getTableStateForStep(500);
    this.getTableStateForStep(1000);

  }

  public getTableStateForStep(step: number) {
    this.nodes.forEach((item, index) => {
      if (Number.parseInt(item.id) + step <= this.valueTotal.value) {
        this.edges.push({
          id: `id_${step}${index}`,
          source: `${item.id}`,
          target: `${Number.parseInt(item.id) + step}`,
          label: `$${step}`,
          data: { stroke: 'black' }
        });
      }
    });
  }

  public inputCoin(value: number) {

    if ((this.valueInputTotal + value) > this.valueTotal.value) {
      this.dialog.open(InfoDialogComponent, {
        autoFocus: false,
        disableClose: false,
        data: {
          Icon: 'cancel',
          IconColor: 'warn',
          Title: 'Se ha cancelado el ingreso',
          Message: `El monto ingresado supera el valor total seran devueltos $${value} `
        }
      });
      return;
    }

    for (let item of this.edges) {
      if (item.label === `$${value}` && item.source === `${this.valueInputTotal}`) {
        item.data.stroke = 'red';
        this.valueInputTotal += value;
        break;
      }
    }
  }

  public finishTransaction() {
    if (this.valueTotal.value !== this.valueInputTotal) {
      this.dialog.open(InfoDialogComponent, {
        autoFocus: false,
        disableClose: false,
        data: {
          Icon: 'cancel',
          IconColor: 'warn',
          Title: 'Error',
          Message: `El monto ingresado ($${this.valueInputTotal}) no coincide con el valor total ($${this.valueTotal.value})`
        }
      });
    } else {
      const dialogRef = this.dialog.open(InfoDialogComponent, {
        autoFocus: false,
        disableClose: false,
        data: {
          Icon: 'check_circle',
          IconColor: 'primary',
          Title: 'Gracias por tu compra',
          Message: `Gracias por preferirnos que disfrutes tus productos :)`
        }
      });

      dialogRef.afterClosed().subscribe(res => {
        this.selecteds = [];
        this.selectedItems.next([]);
        this.valueTotal.next(0);
        this.nodes = [];
        this.edges = [];
        this.valueInputTotal = 0;
      });
    }
  }

}
