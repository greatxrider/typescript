const createPair = <S, T>(v1: S, v2: T): [S, T] => {
    return [v1, v2];
}

const pair = createPair<number, number>(3, 4);

type Model<T = number> = { model: T };

const pairer: Model = {
    model: 23
}
