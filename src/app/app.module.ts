import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AdministrativeModule } from './administrative/administrative.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    DatePipe,
    MessageService,
    ConfirmationService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdministrativeModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
