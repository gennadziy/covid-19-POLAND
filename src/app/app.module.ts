import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolandComponent } from './poland/poland.component';
import { Poland1Component } from './poland1/poland1.component';
import { BelarusComponent } from './belarus/belarus.component';


@NgModule({
  declarations: [
    AppComponent,
    PolandComponent,
    Poland1Component,
    BelarusComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
