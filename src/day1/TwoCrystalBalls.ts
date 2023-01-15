export default function two_crystal_balls(breaks: boolean[]): number {
    let squareLootOfLength = Math.floor(Math.sqrt(breaks.length));

    if (breaks[0] === true) {
        return 0;
    }

    while (squareLootOfLength > 0) {
        for (
            let i = squareLootOfLength;
            i < breaks.length;
            i += squareLootOfLength
        ) {
            if (breaks[i]) {
                for (let j = i - 1; j > 0; j--) {
                    if (!breaks[j]) {
                        return j + 1;
                    }
                }
            }
        }

        squareLootOfLength--;
    }

    return -1;
}
