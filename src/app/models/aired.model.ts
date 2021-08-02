import { Prop } from "./prop.model";

interface IAired {
    from: string;
    to: string;
    prop: Prop;
    string: string;
}

export class Aired {
    from: string;
    to: string;
    prop: Prop;
    string: string;

    constructor();
    constructor(object: IAired)
    constructor(object?: any) {
        this.from = object && object.from || null;
        this.to = object && object.to || null;
        this.prop = object && object.prop || null;
        this.string = object && object.string || null;
    }
}