let v: any = true;
v = "string";

let w: unknown = 1;
w = 'string';
w = {
    runANonExistentMethod: () => {
        console.log('I think therefore I am');
    }
} as { runANonExistentMethod: () => void }
