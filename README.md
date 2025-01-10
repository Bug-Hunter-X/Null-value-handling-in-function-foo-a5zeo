This repository demonstrates a common JavaScript bug related to null value handling in functions. The `foo` function in `bug.js` does not explicitly handle cases where arguments `a` or `b` are null.  This can lead to unexpected behavior or errors in the rest of the function.  `bugSolution.js` demonstrates a more robust implementation that handles null values gracefully.