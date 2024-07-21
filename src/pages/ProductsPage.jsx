import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h2>Products</h2>
        {productStatus === 'loading' && <div>Loading...</div>}
        {productStatus === 'failed' && (
          <div className="alert alert-danger text-center" role="alert">
            <img src="/error.png" alt="Error" style={{ width: '250px', marginBottom: '20px' }} />
            <div>Error loading products: {error}. Please make sure the API server is running.</div>
          </div>
        )}
        {productStatus === 'succeeded' && (
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-4 col-md-6" key={product.id}>
                <div className="product-item position-relative text-center">
                  <img className="img-fluid" src={`img/product-${product.id}.jpg`} alt={product.name} />
                  <div className="p-4">
                    <h4 className="text-primary">{product.name}</h4>
                    <p>{product.description}</p>
                    <h4 className="text-primary">${product.price}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
