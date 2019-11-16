// I feel lack of practice in applying the methods we’ve learned in class. 
// Theoreticaly I understand how to do the assignment requirements but unfortunately 
// I can do nothing better than I’ve done already

class ShoppingCart {
    constructor(cart){
        this.name = cart.itemName
        this.quantity = cart.quantity
        this.pricePerUnit = cart.price   
    }

    total(cart){
        cart.reduce((total, itemName))
        return (this.quantity * this.price)
    }

    clear(cart){
        this.cart = []
    }

    addItem(cart) {
        return cart.push(cart)
    }

    getItems(cart) {

    }
}

const cart = new ShoppingCart({
    itemName: "Lapte",
    quantity: 2,
    price: 1.5
})



module.exports = ShoppingCart



