import { Component } from '@angular/core';
import { Character, Turn } from 'src/model/structure';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
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
    this.mensagem = '';
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
