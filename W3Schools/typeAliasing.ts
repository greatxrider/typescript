type CarType = string;
type CarModel = string;
type CarYear = number;
type Car = {
    year: CarYear,
    model: CarModel,
    type: CarType
};

let carString: CarType = "BMW";
let carModel: CarModel = "X5";
let carYear: CarYear = 2024;

const car1: Car = {
    year: carYear,
    type: carString,
    model: carModel
};
