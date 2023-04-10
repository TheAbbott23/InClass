const shows = [
    {
        title: 'Psych',
        starring: ['James Roday', 'Dule Hill'],
        stars: 5

    },
    {
        title: 'West Wing',
        starring: ['Martin Sheen', 'Dule Hill'],
        stars: 'Four'
    },
    {
        title: 'Friends',
        starring: ['Matt LeBlanc', 'Jennifer Aniston'],
        stars: 'Five'

    },
    {
        title: 'Dr. Who',
        starring: [],
        stars: 'One'
    },
];


function findShow(array,title) {
 return array.find(show=>show.title === title);
}
//console.log(findShow(shows,'West Wing'))


function addShow(array, title, starring, stars) {
    const newShow = {title:title, starrring:starring, stars:stars}
    array.push(newShow);

}

// addShow(shows,"Game of Thrones", ['Kit Harrington', 'Emilia Clarke'], 'five');
// console.log(shows);


function fiveStars(array) {
    return array.filter(item=>item.stars === 'five');
}

function starringDule (array) {
    return array.filter(actor=>actor.starring.includes('Dule Hill'))
}
//console.log(shows,starringDule);

function oneStars(array,stars) {
    return array.some(rating=>rating.stars === stars);
}

