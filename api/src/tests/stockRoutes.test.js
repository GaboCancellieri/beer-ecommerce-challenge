import request from 'supertest';
import express from 'express';
import stockRoutes from "../routes/stock.routes.js";
import products from '../data/products.js';

const app = express();
app.use(express.json());
app.use('/api', stockRoutes);

describe('GET /api/stock-price/:sku', () => {
  it('should return stock and price for a valid SKU', async () => {
    const response = await request(app).get(`/api/stock-price/${products[0].skus[0].code}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('stock');
    expect(response.body).toHaveProperty('price');
  });

  it('should return 400 for an invalid SKU', async () => {
    const response = await request(app).get('/api/stock-price/invalidSKU!');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Invalid or missing SKU');
  });

  it('should return 404 for a non-existent SKU', async () => {
    const response = await request(app).get('/api/stock-price/nonExistentSKU');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message', 'Stock/Price not found');
  });
});