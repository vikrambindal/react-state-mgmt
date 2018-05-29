import { observable, autorun, computed } from 'mobx';

class Product {
    @observable name;
    @observable price;
    @observable description;

    constructor(name, description, price) {
        this.name = name;
        this.price = Number(price);
        this.description = description;
    }
}

class ProductStore {

    @observable products = [];

    @computed get totalPrice() {
        return this.products.reduce((total, currentElement) => total + currentElement.price, 0);
    }

    addProduct(name, description, price) {
        this.products.push(new Product(name, description, price));
    }
}
var store = new ProductStore();

export default store;

autorun(() => {
    console.log('Autorun');
});