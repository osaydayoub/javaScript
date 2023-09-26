const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }
    
    function getCandy(candyStore, id){
       let candy =candyStore.candies.find(candy=>{
        return candy.id===id
       }) 
       return candy;
    }
    
    // let c1=getCandy(candyStore,'as12f');
    // c1

    function getPrice(candyStore, id){
     let candy=getCandy(candyStore,id);
     return candy.price;
    }
    // let p1=getPrice(candyStore,'as12f')
    // p1

    function addCandy(candyStore, id, name, price){
        let newCandy={ 
            name,
            id,
            price,
            amount:1
        }
        candyStore.candies.push(newCandy);
    }

    // let candiesArray=candyStore.candies;
    // console.log(candiesArray)
    // addCandy(candyStore,'123','Loacker',10);
    // console.log(candiesArray)

function buy(candyStore, id){
    let candy=getCandy(candyStore,id);
    candy
    candyStore.cashRegister+=candy.price;
    candy.amount--;
    candy
}

    // let candiesArray=candyStore.candies;
    // console.log(candiesArray)
    // console.log(candyStore.cashRegister)
    // buy(candyStore,'as12f');
    // console.log(candyStore.cashRegister)
    // console.log(candiesArray) 


