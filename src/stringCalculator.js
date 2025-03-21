export function add(numbers) {
  if (numbers === "") return 0;
  const nums = numbers.replace(/\n/g, ",").split(",").map(Number);
  return nums.reduce((sum, n) => sum + n, 0);
}
