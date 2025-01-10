function foo(a, b) {
  a = a === null ? 0 : a; // Default to 0 if a is null
  b = b === null ? 0 : b; // Default to 0 if b is null
  // ... rest of the function, now safely using a and b
  return a + b; //Example operation
}
// Test cases
console.log(foo(null, 2)); // Output: 2
console.log(foo(5, null)); // Output: 5
console.log(foo(null, null)); //Output: 0
console.log(foo(5, 2)); // Output: 7