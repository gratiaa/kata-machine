export default function bs_list(haystack: number[], needle: number): boolean {
    let lowestIndex = 0;
    let highestIndex = haystack.length - 1;

    while (lowestIndex <= highestIndex) {
        let middleIndex = Math.floor(
            lowestIndex + (highestIndex - lowestIndex) / 2,
        );

        const value = haystack[middleIndex];

        if (needle === value) {
            return true;
        }

        if (needle > value) {
            lowestIndex = middleIndex + 1;
        } else if (needle < value) {
            highestIndex = middleIndex - 1;
        }
    }

    return false;
}
