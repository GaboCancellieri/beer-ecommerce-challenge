import request from 'supertest';
import express from 'express';
import productRoutes from "../routes/products.routes.js";
import products from '../data/products.js';

const app = express();
app.use(express.json());
app.use('/api', productRoutes);

describe('GET /api/products', () => {
  it('should return a list of products', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /api/products/:id', () => {
  it('should return a product for a valid ID', async () => {
    const response = await request(app).get(`/api/products/${products[0].id}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', products[0].id);
  });

  it('should return 400 for an invalid ID', async () => {
    const response = await request(app).get('/api/products/invalidID');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Invalid or missing product ID');
  });

  it('should return 404 for a non-existent ID', async () => {
    const response = await request(app).get('/api/products/9999');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message', 'Product not found');
  });
});
