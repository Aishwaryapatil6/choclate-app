import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ----
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FivestarComponent } from './fivestar/fivestar.component';
import { MangoComponent } from './mango/mango.component';
import { ChoclatesComponent } from './choclates/choclates.component';
import { ChildPartntComponent } from './child-partnt/child-partnt.component';
import { NewPipePipe } from './pipes/new-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FivestarComponent,
    MangoComponent,
    ChoclatesComponent,
    ChildPartntComponent,
    NewPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [NewPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule {  }
