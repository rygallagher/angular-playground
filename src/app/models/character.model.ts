interface ICharacter {
    mal_id: number;
    url: string;
    image_url: string;
    name: string;
    role: string;
}

export class Character {
    mal_id: number;
    url: string;
    image_url: string;
    name: string;
    role: string;

    constructor();
    constructor(object: ICharacter)
    constructor(object?: any) {
        this.mal_id = object && object.mal_id || null;
        this.url = object && object.url || null;
        this.name = object && object.name || null;
        this.image_url = object && object.image_url || null;
        this.role = object && object.role || null;
    }
}