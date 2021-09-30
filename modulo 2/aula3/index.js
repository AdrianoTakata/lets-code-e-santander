let fullname = 'George Raymond Richard Martin';

const initials = fullname.split(' ').map((item) => {
    return item[0];
}).reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, "");

console.log(initials)

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const titleHtml = wishlist.map(({title}) => {
    return `<h1> ${title} </h1>`
})

console.log(titleHtml)

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true}
]


const getVotersStats = (voters) => {
    return voters.reduce((acc, value) => {
        const {age, voted} = value;
        if (!voted) return {...acc};
        const property = age < 25 ? 'under25' : (age < 40) ? 'under40' : 'under60';
        return {...acc, [property]: acc[property] + 1}
    }, {under25: 0, under40: 0, under60: 0})
}

console.log(getVotersStats(voters))
