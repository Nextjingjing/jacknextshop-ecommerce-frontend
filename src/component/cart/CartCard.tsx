import React from "react";

type Product = {
  productId: number;
  name: string;
  price: number;
  image: string;
  amount: number;
};

type CartCardProps = {
  product: Product;
};

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white min-h-fit">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded"
      />

      <div className="flex-1">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500">ราคา: ฿{product.price.toFixed(2)}</p>
        <p className="text-gray-500">จำนวน: {product.amount}</p>
        <p className="font-semibold mt-2">
          รวม: ฿{(product.price * product.amount).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
