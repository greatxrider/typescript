//typed array, fixed length, specific types

let ourTuple: [number, boolean, string];
ourTuple = [1, true, 'Jeph'];

//readonly tuple
let ourTupleReadOnly: readonly [number, string, boolean];
ourTupleReadOnly = [2, 'Yvonne', false];

//straight put type and readonly to avoid modification
let ourTupleComplete: readonly [number, boolean, string, boolean] = [3, false, 'Jeph', true];

//names tuples
//descriptive names, can only be benefited when using destructuring
let ourTupleDescriptive: [x: number, y: string] = [22.5, 'Tvonne'];

let [x, y] = ourTupleDescriptive;
console.log(x);
console.log(y);
