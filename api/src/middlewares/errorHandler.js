/**
 * Error handling middleware.
 *
 * This middleware catches any errors that occur during the request lifecycle
 * and sends a formatted error response.
 *
 * @param {Function} fn - The controller function to wrap with error handling.
 * @returns {Function} The wrapped controller function with error handling.
 */
export const errorHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

/**
 * Generic error handler.
 *
 * This middleware handles any errors that are passed to it and sends a formatted
 * error response to the client.
 *
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
export const genericErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
};
