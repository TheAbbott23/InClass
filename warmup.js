//const names = ['Jon', 'Rick', 'Morty'];

//console.log(names.join());


const cities = [
    {
        name: 'Seoul', 
        country: 'South Korea',
        hasVisited: true
    },
    {
        name: 'Detroit',
        country: 'U.S.',
        hasVisited: false
    },
    {
        name: 'Sydney',
        country: 'Aus',
        hasVisited: false
    },
];

const notVisited = cities.filter(city => city.hasVisited === false)

//console.log(notVisited);

const hasVisited = cities.filter(city=>city.hasVisited === true )

//console.log(hasVisited);

