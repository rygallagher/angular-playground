import { Top } from "./top.model";

interface IJikanTop {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    top: Top[];
}

export class JikanTop {
    request_hash: string;
    request_cached: boolean;
    request_cache_expiry: number;
    top: Top[];

    constructor();
    constructor(object: IJikanTop)
    constructor(object?: any) {
        this.request_hash = object && object.request_hash || null;
        this.request_cached = object && object.request_cached || null;
        this.request_cache_expiry = object && object.request_cache_expiry || null;
        this.top = object && object.top || null;
    }
}