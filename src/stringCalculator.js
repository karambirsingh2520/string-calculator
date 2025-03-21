export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  let input = numbers;

  if (numbers.startsWith("//")) {
    const [delimLine, rest] = numbers.split("\n");
    delimiter = new RegExp(delimLine.slice(2));
    input = rest;
  }

  const nums = input.split(delimiter).map(Number);
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}
