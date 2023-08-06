import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ----
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FivestarComponent } from './fivestar/fivestar.component';
import { MangoComponent } from './mango/mango.component';

@NgModule({
  declarations: [
    AppComponent,
    FivestarComponent,
    MangoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
