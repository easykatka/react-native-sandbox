export interface ICategories {
    title: string,
    id: string,
    color: string
}

export default class Category implements ICategories{
    id;
    title;
    color;

    constructor(id:string, title:string, color:string) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
}