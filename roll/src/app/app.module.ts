import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Character, Turn } from 'src/model/structure';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

  title = 'Roll for Initiative';
  mensagem: string;
  turn!: Turn;

  charRemove!: string;
  name!: string;
  cl!: string;
  ac!: number;
  hp!: number;
  mp!: number;
  perception!: number;

  constructor() {
    this.mock();
  }

  mock(): void {
    this.turn = new Turn();
    this.turn.addChar('Kaa', 20, 40, 33, 27);
    this.turn.addChar('Teresa', 27, 100, 25, 23);
  }

  add() {
    this.turn.addChar(this.name, this.ac, this.hp, this.mp, this.perception);
  }

  remove() {
    this.turn.removeChar(this.charRemove);
  }
}
