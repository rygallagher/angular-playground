import { Character } from "./character.model";

interface IJikanCharacter {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    characters: Character[];
}

export class JikanCharacter {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    characters: Character[];

    constructor();
    constructor(object: IJikanCharacter)
    constructor(object?: any) {
        this.request_hash = object && object.request_hash || null;
        this.request_cached = object && object.request_cached || null;
        this.request_cache_expiry = object && object.request_cache_expiry || null;
        this.characters = object && object.characters || null;
    }
}