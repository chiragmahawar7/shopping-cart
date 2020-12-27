export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(
        id: number,
        name: string,
        description: string = '',
        price: number = 0,
        imageUrl: string = 'https://www.vegan.io/blog/assets/10-healthiest-vegetables-to-include-in-your-vegan-diet-2018-04-16/healthiest-vegetables-df1cf550711076d052eaade12c38289a2637c38e546182d3c0136a90cb0bb0b3.jpg') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}