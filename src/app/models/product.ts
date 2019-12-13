export class product {
    id: string;
    name: string;
    imagePath: string;
    price: number;
    discount: number;
    amountLeft: number;
    isNew: boolean;
    description: string;
    category: string;
    type: string;

    constructor(id: string, name: string, imagePath: string, price: number,
                discount: number, amountLeft: number, isNew: boolean,
                description: string, category: string, type: string){

        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
        this.discount = discount;
        this.amountLeft = amountLeft;
        this.isNew = isNew;
        this.description = description;
        this.category = category;
        this.type = type;

    }

}