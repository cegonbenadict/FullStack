import { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/').then(res => setProducts(res.data));
  }, []);

  const deleteProduct = (id) => {
    API.delete(`/${id}`).then(() => {
      setProducts(products.filter(p => p.id !== id));
    });
  };

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/add">Add Product</Link>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <Link to={`/edit/${p.id}`}> Edit </Link>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;