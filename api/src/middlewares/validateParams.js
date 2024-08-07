/**
 * Validate product ID parameter middleware.
 *
 * This middleware validates the `id` parameter for product routes.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
export const validateProductId = (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(parseInt(id, 10))) {
    return res.status(400).json({ message: 'Invalid or missing product ID' });
  }
  next();
};

/**
 * Validate SKU parameter middleware.
 *
 * This middleware validates the `sku` parameter for stock routes.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
export const validateSku = (req, res, next) => {
  const { sku } = req.params;
  if (!sku || !/^[a-zA-Z0-9]+$/.test(sku)) {
    return res.status(400).json({ message: 'Invalid or missing SKU' });
  }
  next();
};
