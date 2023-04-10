
let cities = [
{
    name:'London',
    country: 'England',
    visted: false
},
{
    name: 'Athens',
    country: 'Greece',
    visted: true
},
{
    name: 'Beruit',
    country: "Lebanon",
    visited: false

}
]

for (let i = 0; i <cities.length; i++) {

    if (cities[i].visited===false) {
console.log(cities[i].name);
}
}









