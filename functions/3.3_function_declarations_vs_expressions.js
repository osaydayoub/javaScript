
function percentageOfWorld1(population){
    const worldPopulation=7900;
    let result=(population/worldPopulation)*100;
    let per= result.toFixed(1);
    per
    return per;
}
function logCountry(country,population,per){
console.log(`${country} has ${population} million people, so it's about ${per}% of the world population.`);
}

let ChinaPer=percentageOfWorld1(1441);
let USAPer=percentageOfWorld1(333);
let IndonesiaPer=percentageOfWorld1(277);
logCountry('China',1141,ChinaPer);
logCountry('USA',333,USAPer);
logCountry('Indonesia',277,IndonesiaPer);

const percentageOfWorld2=function(population){
    const worldPopulation=7900;
    let result=(population/worldPopulation)*100;
    let per= result.toFixed(1);
    per
    return per;
}
let ChinaPer2=percentageOfWorld2(1441);
let USAPer2=percentageOfWorld2(333);
let IndonesiaPer2=percentageOfWorld2(277);
