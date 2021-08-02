interface ITop {
    mal_id: number;
    rank: number;
    title: string;
    url: string;
    image_url: string;
    type: string;
    episodes: number;
    start_date: string;
    end_date: string;
    members: number;
    score: number;
}

export class Top {
    mal_id: number;
    rank: number;
    title: string;
    url: string;
    image_url: string;
    type: string;
    episodes: number;
    start_date: string;
    end_date: string;
    members: number;
    score: number;

    constructor();
    constructor(object: ITop)
    constructor(object?: any) {
        this.mal_id = object && object.mal_id || null;
        this.rank = object && object.rank || null;
        this.title = object && object.title || null;
        this.url = object && object.url || null;
        this.image_url = object && object.image_url || null;
        this.type = object && object.type || null;
        this.episodes = object && object.episodes || null;
        this.start_date = object && object.start_date || null;
        this.end_date = object && object.end_date || null;
        this.members = object && object.members || null;
        this.score = object && object.score || null;
    }
}