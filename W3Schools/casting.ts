let x_r: unknown = "hello";

console.log((x_r as string).toUpperCase());

let x_another: unknown = 4;

console.log((<string>x_another).length);

let x_fore = 'hello';

console.log(((x_fore as unknown) as string).length);
