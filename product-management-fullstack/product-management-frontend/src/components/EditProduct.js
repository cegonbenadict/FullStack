import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    API.get(`/${id}`).then(res => setProduct(res.data));
  }, [id]);

  const submit = (e) => {
    e.preventDefault();
    API.put(`/${id}`, product).then(() => navigate('/'));
  };

  return (
    <form onSubmit={submit}>
      <input value={product.name}
        onChange={e => setProduct({ ...product, name: e.target.value })} />
      <input type="number" value={product.price}
        onChange={e => setProduct({ ...product, price: e.target.value })} />
      <input value={product.description}
        onChange={e => setProduct({ ...product, description: e.target.value })} />
      <button type="submit">Update</button>
    </form>
  );
}
export default EditProduct;