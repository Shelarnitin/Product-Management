import { useEffect, useState } from "react";
import { getProducts } from "./api/productApi";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Management</h1>

      <ProductForm
        refresh={loadProducts}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
      />

      <ProductList
        products={products}
        refresh={loadProducts}
        setEditProduct={setEditProduct}
      />
    </div>
  );
}

export default App;
