export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  let input = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    input = parts[1];
  }

  const nums = input.split(delimiter).map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}
