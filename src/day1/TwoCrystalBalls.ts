export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));

    if (breaks[0] === true) {
        return 0;
    }

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    // why using the var j, not this one?
    // for (; i < breaks.length; i++) {
    //     if (breaks[i]) {
    //         return i;
    //     }
    // }

    return -1;
}
