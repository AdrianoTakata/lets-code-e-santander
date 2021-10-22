class Car {
    constructor({brand, model, year}) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    turnOn() {
        console.log(`${this.model} is on`)
    }
}

const car = new Car({brand: 'Chevrolet', model: 'Celta', year: 2005})
console.log(car);
console.log(car.turnOn())