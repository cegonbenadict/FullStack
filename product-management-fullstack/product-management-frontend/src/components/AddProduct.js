import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function AddProduct() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    API.post('/', product).then(() => navigate('/'));
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" value={product.name}
        onChange={e => setProduct({ ...product, name: e.target.value })} />
      <input type="number" placeholder="Price" value={product.price}
        onChange={e => setProduct({ ...product, price: e.target.value })} />
      <input placeholder="Description" value={product.description}
        onChange={e => setProduct({ ...product, description: e.target.value })} />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddProduct;