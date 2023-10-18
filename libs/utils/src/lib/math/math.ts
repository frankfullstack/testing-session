export function add(numbers: number[]) {
    let sum = 0;
    for (const n of numbers) {
        sum+= n;
    }
    return sum;
}