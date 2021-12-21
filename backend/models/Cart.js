module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.totalPoints = oldCart.totalPoints || 0;

    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        storedItem.price = Math.round(storedItem.price * 100) / 100;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
        this.totalPrice = Math.round(this.totalPrice * 100) / 100;
        let points = (storedItem.item.price/100) * 6;
        this.totalPoints += Math.round(points * 100)/100;
    };

    this.reduceByOne = function(id) {
        var storedItemPrice = this.items[id].item.price;
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;
        this.totalPrice = Math.round(this.totalPrice * 100) / 100;
        let points = (storedItemPrice/100) * 6
        this.totalPoints -= Math.round(points * 100)/100

    };

    this.removeItem = function(id) {
        if (this.items[id].price < 0){
            this.items[id].price = 0;
        }
        if (this.totalPrice < 0){
            this.totalPrice = 0;
        }
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
        this.totalPrice = Math.round(this.totalPrice * 100) / 100;
        if (this.totalQty == 0){
            this.totalPrice == 0
        }
        let points = (this.totalPrice/100) * 6;
        this.totalPoints = Math.round(points * 100)/100;
    };
    
    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};