import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE } from "../constants/api";
import CartCard from "../component/cart/CartCard";

type Product = {
    productId: number;
    name: string;
    price: number;
    image: string;
    amount: number;
};

const Cart = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_BASE}/api/cart`, { withCredentials: true })
                setProducts(response.data.products);
            } catch (error) {
                console.log("error: ", error)
            }
        }
        fetchProducts();
    },
        [])
    return (
        <div className="flex flex-col md:flex-row min-h-fit bg-gray-100">
            {/* Sidebar - Cart Items */}
            <section className="flex-1 p-6 bg-white">
                <h2 className="text-xl font-bold mb-4">Cart Items</h2>
                {/* Placeholder for cart items */}
                <div className="min-h-fit flex flex-col gap-4 text-gray-500">
                    {products ? products.map((p) => (
                        <CartCard key={p.productId} product={p} />
                    )) : <h2>No Product</h2>}
                </div>
            </section>

            {/* Main Content - Order Summary */}
            <aside className="w-full md:w-80 bg-white p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                {/* Placeholder for summary content */}
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                    Summary goes here
                </div>
            </aside>
        </div>
    );
}

export default Cart