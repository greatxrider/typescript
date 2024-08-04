interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 24,
    width: 12
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 24,
    width: 12,
    color: 'red'
}
