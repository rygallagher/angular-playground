interface IGenre {
    mal_id: string;
    type: string;
    name: string;
    url: string;

}

export class Genre {
    mal_id: string;
    type: string;
    name: string;
    url: string;

    constructor();
    constructor(object: IGenre)
    constructor(object?: any) {
        this.mal_id = object && object.mal_id || null;
        this.type = object && object.type || null;
        this.name = object && object.name || null;
        this.url = object && object.url || null;
    }
}