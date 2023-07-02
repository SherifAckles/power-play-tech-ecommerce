//by this we handle errors throw express without creating many trys and catchs

const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;

// The code snippet defines a utility function asyncHandler that simplifies error handling in Express middleware functions. It takes a function fn as an argument, which is expected to be an asynchronous function that accepts req, res, and next as parameters.

// The asyncHandler function returns a new function that wraps the fn function. This new function handles any errors that occur during the execution of the fn function. It does this by wrapping the fn function call in a Promise.resolve() and chaining a .catch(next) to catch any rejected promises (i.e., thrown errors) and pass them to the Express error handling middleware.

// In other words, the asyncHandler function simplifies error handling by eliminating the need for explicit try-catch blocks in each middleware function. Instead, any errors that occur within the fn function will be automatically caught and passed to the next error-handling middleware in the Express middleware chain.

// The asyncHandler function is exported as the default export, making it available for use in other modules that require this error handling mechanism.