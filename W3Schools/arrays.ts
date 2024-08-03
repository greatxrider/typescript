// Fixed type 
// Error
const namesString: string[] = [];
namesString.push(3);

//good
namesString.push('Hero');

// cannot be changed because of readonly
const namesReadonly: readonly string[] = [];
namesReadonly.push('Jeph');

// variables can be anythin

const namesUnknown: unknown[] = [];
namesUnknown.push(1);
namesUnknown.push('Jeph');

//implicit / inference
const namesInfer = [];
namesInfer.push(3);
namesInfer.push('Yvonne');
