import { Aired } from "./aired.model";
import { Genre } from "./genre.model";

interface IJikanAnime {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    mal_id: number;
    url: string;
    image_url: string;
    trailer_url: string;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    premiered: string;
    broadcast: string;
    genres: Genre[];
    opening_themes: string[];
    ending_themes: string[];
}

export class JikanAnime {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    mal_id: number;
    url: string;
    image_url: string;
    trailer_url: string;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    premiered: string;
    broadcast: string;
    genres: Genre[];
    opening_themes: string[];
    ending_themes: string[];

    constructor();
    constructor(object: IJikanAnime)
    constructor(object?: any) {
        this.request_hash = object && object.request_hash || null;
        this.request_cached = object && object.request_cached || null;
        this.request_cache_expiry = object && object.request_cache_expiry || null;
        this.mal_id = object && object.mal_id || null;
        this.url = object && object.url || null;
        this.image_url = object && object.image_url || null;
        this.trailer_url = object && object.trailer_url || null;
        this.title = object && object.title || null;
        this.title_english = object && object.title_english || null;
        this.title_japanese = object && object.matitle_japanesel_id || null;
        this.title_synonyms = object && object.title_synonyms || null;
        this.type = object && object.type || null;
        this.source = object && object.source || null;
        this.episodes = object && object.episodes || null;
        this.status = object && object.status || null;
        this.airing = object && object.airing || null;
        this.aired = object && object.aired || null;
        this.duration = object && object.duration || null;
        this.rating = object && object.rating || null;
        this.score = object && object.score || null;
        this.scored_by = object && object.scored_by || null;
        this.rank = object && object.rank || null;
        this.popularity = object && object.popularity || null;
        this.members = object && object.members || null;
        this.favorites = object && object.favorites || null;
        this.synopsis = object && object.synopsis || null;
        this.background = object && object.background || null;
        this.premiered = object && object.premiered || null;
        this.broadcast = object && object.broadcast || null;
        this.genres = object && object.genres || null;
        this.opening_themes = object && object.opening_themes || null;
        this.ending_themes = object && object.ending_themes || null;
    }
}