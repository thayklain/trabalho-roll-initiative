export class Character {
    name: string;
    ac: number;
    hp: number;
    mp: number;
    perception: number;


    constructor(name: string, ac: number, hp: number, mp: number, perception: number) {
        this.name = name;
        this.ac = ac;
        this.hp = hp;
        this.mp = mp;
        this.perception = perception;
    }
}

export class Turn {
    characters: Character[];
    ultId = 0;

    constructor() {
        this.characters = [];
    }

    addChar(name: string, ac: number, hp: number, mp: number, perception: number): Character {
        const character: Character = new Character(name, ac, hp, mp, perception);
        this.characters.push(character);
        return character;
    }

    removeChar(charRemove: string): void {
            this.characters.forEach((array,index)=>{
                if(array.name==charRemove) this.characters.splice(index,1);
            });
        }
    
}