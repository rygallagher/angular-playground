import { From } from "./from.model";
import { To } from "./to.model";

interface IProp {
    from: From;
    to: To;
}

export class Prop {
    from: From;
    to: To;

    constructor();
    constructor(object: IProp)
    constructor(object?: any) {
        this.from = object && object.from || null;
        this.to = object && object.to || null;
    }
}