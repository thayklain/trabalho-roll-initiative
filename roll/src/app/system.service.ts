import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, Turn } from 'src/model/structure';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  turn: Turn;

  characters: Character[];

  charRemove!: string;
  name!: string;
  ac!: number;
  hp!: number;
  mp!: number;
  perception!: number;

  constructor(private http: HttpClient) {
    this.mock();
    this.characters = [];
  }

  mock(): void {
    this.turn = new Turn();
    this.turn.addChar('Kaa', 20, 40, 33, 27);
    this.turn.addChar('Teresa', 27, 100, 25, 23);
  }

  add(name: string, ac: number, hp: number, mp: number, perception: number): Character {
    const character: Character = new Character(name, ac, hp, mp, perception);
    this.characters.push(character);
    return character;
}

  remove() {
    this.turn.removeChar(this.charRemove);
  }
}
