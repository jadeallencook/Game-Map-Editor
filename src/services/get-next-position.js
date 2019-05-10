export default (direction, position) => {
    const isVertical = (((direction / 2) % 1) > 0);
    let { x, y } = position;
    x = (isVertical) ? x : (!direction) ? (x - 1 < 0) ? 0 : x - 1 : (x + 1 > 9) ? 9 : x + 1;
    y = (!isVertical) ? y : (direction === 1) ? (y - 1 < 0) ? 0 : y - 1 : (y + 1 > 9) ? 9 : y + 1;
    return {
        x: x,
        y: y
    };
}