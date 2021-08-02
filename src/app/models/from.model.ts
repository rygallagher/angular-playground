interface IFrom {
    day: number;
    month: number;
    year: string;
}

export class From {
    day: number;
    month: number;
    year: string;

    constructor();
    constructor(object: IFrom)
    constructor(object?: any) {
        this.day = object && object.day || null;
        this.month = object && object.month || null;
        this.year = object && object.year || null;
    }
}