const qs = (arr: number[], low: number, high: number): void => {};

const partition = (arr: number[], lo: number, hi: number): number => {
    const pivot = arr[hi];

    let idx = lo - 1;
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
        }
    }
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
};

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
