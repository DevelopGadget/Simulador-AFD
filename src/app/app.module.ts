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
import { FabsButtonsComponent } from './components/fabs-buttons/fabs-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoDialogComponent,
    ButtonsMoneyComponent,
    ListProductsComponent,
    FabsButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
