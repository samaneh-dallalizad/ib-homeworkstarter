class ShoppingCart{
    constructor(){
        this.items=[];
    }

    getItems(){
        return this.items;
    }

    addItem(name, quantity, pricePerUnit){
            this.items.push({
                name:name, 
                quantity:quantity, 
                pricePerUnit:pricePerUnit
            })
    }
    clear(){
        this.items=[];
    }
    total(){
        if(this.items.length===0){
            return 0;
        }
        
        return this.items.reduce((total,item) => {
          return  total+item.quantity*item.pricePerUnit;
        },0)
    }
}
module.exports = ShoppingCart