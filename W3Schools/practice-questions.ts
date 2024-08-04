const array: number[] = [];

const arrayTuple: [number, string] = [12, "hallelujah"];

const object: {type: string, number: number} = {
    type: 'oh',
    number: 12
}

type CarColor = string;
type totalCar = number;

type TypeScript = {
    nice: string,
    num: number
}

interface TypeScript2 {
    nice: string,
    num: number
}

interface colorFulType extends TypeScript2 {
    color: string
}
