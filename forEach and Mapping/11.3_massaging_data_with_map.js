const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },

];

//1. Create a function that returns all the names from the array.
function getNames(data) {
    const newArray = data.map(opject => {
        return opject.name;
    })
    return newArray;
}
//console.log(getNames(data));

// Create a function that returns all the objects that are born
// before 1990.
function before1990(arr) {
    let arr2 = [...arr]

    arr2.forEach((object, index, array) => {
        const now = new Date(object.birthday)
        let year = now.getFullYear()
        if (year >= 1990) {
            array.splice(index, 1);
        }

    })
    return arr2

}
// console.log(data)
// console.log(before1990(data))

// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.
function allFoods(array){
    const foods={}
    array.forEach(object=>{
        object.favoriteFoods.meats.forEach(food=>{
            if(foods[food]===undefined){
                foods[food]=1;
            }else{
                foods[food]++;
            }
        })
        object.favoriteFoods.fish.forEach(food=>{
            if(foods[food]===undefined){
                foods[food]=1;
            }else{
                foods[food]++;
            }
        })
    })
    return foods;
}

console.log(allFoods(data));