interface ITo {
    day: number;
    month: number;
    year: string;
}

export class To {
    day: number;
    month: number;
    year: string;

    constructor();
    constructor(object: ITo)
    constructor(object?: any) {
        this.day = object && object.day || null;
        this.month = object && object.month || null;
        this.year = object && object.year || null;
    }
}