const car: { type: string, model: string, year: number } = {
    type: 'toyota', model: 'corolla', year: 2024
}

console.log(car);

//inference
const carInference = {
    type: 'Toyota'
};

//optional properties
const carOptional: { type: string, model?: string } = {
    type: 'Toyota'
}
carOptional.model = 'Corolla';
console.log(carOptional);

//index signatures
let cars: { type: string, mode: number };
