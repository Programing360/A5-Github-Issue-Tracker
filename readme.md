1️⃣ What is the difference between var, let, and const?
Answer: 

<!-- var -->
var is a function scope. It's not block scope. It can be redeclared and Updated.

<!-- let  -->
let is a block scope. It's can't ne redeclared. It can be updated

<!-- const -->
const is a block scope. It's can't be redeclared. It can't be updated. 

2️⃣ What is the spread operator (...)?
Answer: 
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


3️⃣ What is the difference between map(), filter(), and forEach()?

<!-- map -->
The map method creates a new array populated with the results of calling a provided function on every element in the calling array. It is used to transform data.

<!-- filter -->
The filter method creates a new array with all elements that pass the test implemented by the provided function. It is used to include only certain elements from the original array.

<!-- forEach -->
The forEach method executes a provided function once for each array element. It is typically used to perform side effects rather than to transform the array.

4️⃣ What is an arrow function?

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

Arrow functions cannot use yield within their body and cannot be created as generator functions.

5️⃣ What are template literals?

Template literals are ES6 JavaScript string literals that use backticks (`) instead of quotes, allowing for embedded expressions, multi-line strings, and easier string interpolation. They enable dynamic value injection directly into strings using ${variable} syntax .