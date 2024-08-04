const volumeOfBox = (length: number, width: number, height: number): number => {
    const volume = length * width * height;
    return volume;
}

const printHello = (): void => {
    console.log('Hello');
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

const add = (a: number, b: number, c?: number): number => {
    return a + b + (c || 0);
}

const pow = (value: number, exponent: number = 10): number => {
    return value ** exponent;
}

const divide = ({ dividend, divisor }: { dividend: number, divisor: number }): number => {
    return dividend / divisor;
}

const add_2 = (a: number, b: number, ...rest: number[]) => {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

type Negate = (value: number) => number

const negateFunction: Negate = (value) => {
    return value * 1;
}
