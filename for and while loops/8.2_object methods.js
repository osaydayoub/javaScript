const mycountry={
    country: 'United States of America',
    capital: 'Washington',
    language: 'English',
    population: 333,
    neighbours: ['Canada','Mexico','the Bahamas','Cuba','Russia'],
    describe(){
        console.log(
            `${this.country} has ${this.population} million people,their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },
    checkIsland(){
       this['isIsland'] =(this.neighbours.length===0)?true:false;
    }
}

mycountry.describe();
mycountry.checkIsland();

