import { deleteProduct } from "../api/productApi";

export default function ProductList({ products, refresh, setEditProduct }) {
  return (
    <div>
      <h2>Product List</h2>

      {products.map((p) => (
        <div key={p._id} style={{ border: "1px solid black", margin: 10 }}>
          <h3>{p.name}</h3>
          <p>Price: {p.price}</p>
          <p>{p.description}</p>

          <button onClick={() => setEditProduct(p)}>Edit</button>

          <button
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
