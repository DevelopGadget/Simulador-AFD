import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './page/home/home.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { ButtonsMoneyComponent } from './components/buttons-money/buttons-money.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FabsButtonsComponent } from './components/fabs-buttons/fabs-buttons.component';
import { DisplayMoneyComponent } from './components/display-money/display-money.component';

const angularMaterial = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoDialogComponent,
    ButtonsMoneyComponent,
    ListProductsComponent,
    FabsButtonsComponent,
    DisplayMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ...angularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
