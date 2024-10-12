let rockets = [
    { country: 'Russia', launches: 32 },
    { country: 'US', launches: 23 },
    { country: 'China', launches: 16 },
    { country: 'Europe(ESA)', launches: 7 },
    { country: 'India', launches: 4 },
    { country: 'Japan', launches: 3 }
];

let total = rockets.reduce((accumulator, rocket) =>{
    return accumulator + rocket.launches;
}, 0 );

let average = total / rockets.length;

console.log("The average number of launches among all the countries is :", average);