export class cartItem {
    id: string;
    productId: string;
    amount: number;

    constructor(id: string, productId: string, amount: number){
        this.id = id;
        this.productId = productId;
        this.amount = amount;
    }
}