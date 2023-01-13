export default function bs_list(haystack: number[], needle: number): boolean {
    let lowestIndex = 0;
    let highestIndex = haystack.length - 1;

    while (lowestIndex <= highestIndex) {
        let middleIndex =
            lowestIndex + Math.ceil((highestIndex - lowestIndex) / 2);

        if (needle === haystack[middleIndex]) {
            return true;
        }

        if (needle > haystack[middleIndex]) {
            lowestIndex = middleIndex + 1;
        } else if (needle < haystack[middleIndex]) {
            highestIndex = middleIndex - 1;
        }
    }

    return false;
}
