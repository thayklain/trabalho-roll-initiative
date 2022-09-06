import { Component } from '@angular/core';
import { Character, Turn } from 'src/model/structure';
import { SystemService } from '../system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

turn: Turn;

charRemove!: string;
name!: string;
ac!: number;
hp!: number;
mp!: number;
perception!: number;


constructor(private service: SystemService, private router: Router) {
}

add() {
  let acess = this.service.add(this.name, this.ac, this.hp, this.mp, this.perception);
  this.router.navigate(['/home']);
}

remove() {
  this.turn.removeChar(this.charRemove);
}
}
