import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./DB/db.js"
import productRoutes from "./routes/productRoutes.js";


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.Port || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})