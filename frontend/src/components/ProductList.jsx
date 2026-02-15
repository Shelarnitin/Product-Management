import { deleteProduct } from "../api/productApi";

export default function ProductList({ products, refresh, setEditProduct }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>

      {products.map((p) => (
        <div key={p._id} className="card">
          <h3>{p.name}</h3>
          <p>Price: {p.price}</p>
          <p>{p.description}</p>

          <div className="card-buttons">

           <button className="btn-edit" onClick={() => setEditProduct(p)}>Edit</button>
          </div>

          <button
            className="btn-delete"
            onClick={() => {
              deleteProduct(p._id);
              refresh();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
