import { Component, Input } from '@angular/core';
import { Character, Turn } from 'src/model/structure';
import { SystemService } from '../system.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addchar',
  templateUrl: './addchar.page.html',
  styleUrls: ['./addchar.page.scss'],
})
export class AddcharPage {
  
  @Input() char: Character;
  @Input() turn: Turn;

  characters: Character[];

  charRemove!: string;
  name!: string;
  ac!: number;
  hp!: number;
  mp!: number;
  perception!: number;

  constructor(private service: SystemService, private router: Router, private route: ActivatedRoute){
    this.characters = [];
  }
  
  add() {
    let acess = this.service.add(this.name, this.ac, this.hp, this.mp, this.perception);
    this.router.navigate(['/home']);
  }
}