import Product from "../models/Product.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: "Error Fetching products" })
    }
};

export const createProduct = async (req, res) => {
    try {
        const {name, price, description} = req.body;

        if (!name || !price || !description){
            return res.status(400).json({ message: "All Fields are required"});
        }

        const newProduct = await Product.create({
            name, price, description,
        });

        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({ message: "Error creating product"})
    }
};

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ message: "Invalid Product Id"})
        }

        const updated = await Product.findByIdAndUpdate(
            id, req.body, { new: true}
        );

        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error Updating product..."});
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Product Id..."});
        }

        await Product.findByIdAndDelete(id);
        res.json({ message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error deleting product"})
    }
};