import { useState ,useEffect} from "react";

import { createProduct, updateProduct } from "../api/productApi.js";

export default function ProductForm({ refresh, editProduct, setEditProduct}) {
    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
    });

    useEffect(() => {
        if (editProduct) setForm(editProduct);
    }, [editProduct])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editProduct) {
            await updateProduct(editProduct._id, form);
            setEditProduct(null);
        } else {
            await createProduct(form);

        }

        setForm({ name: "", price: "", description: ""})
        refresh();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{editProduct ? "Update Product" : "Add Product"}</h2>

            <input 
                placeholder="Name..."
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
            />

            <input 
                placeholder="Price..."
                value={form.price}
                onChange={(e) => setForm({...form, price: e.target.value})}
            />

            <input 
                placeholder="Description..."
                value={form.description}
                onChange={(e) => setForm({...form, description: e.target.value})}
            />

            <button>{editProduct ? "Update" : "Add"}</button>

            {editProduct && (
                <button className="btn-add">
                  {editProduct ? "Update" : "Add"}
                </button>

            )}

        </form>
    )
}