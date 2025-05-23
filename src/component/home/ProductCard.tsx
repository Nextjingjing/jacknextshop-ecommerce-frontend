import { useNavigate } from "react-router-dom";

type Product = {
    productId: number;
    name: string;
    price: number;
    image: string;
  };
  
  type ProductProps = {
    product: Product;
  };
  
  export const ProductCard = ({ product }: ProductProps) => {
    const navigation = useNavigate()
    return (
      <div 
      className="p-4 border-b-amber-50 w-full max-w-[16rem] cursor-pointer bg-white rounded shadow text-center"
      onClick={() => {navigation(`/product/${product.productId}`)}}
      >
        <img src={product.image} alt={product.name} className="w-full max-w-[20rem] h-[225px] object-contain mb-2" />
        <p className="font-bold">{product.name}</p>
        <p className="text-red-600">฿{product.price.toLocaleString()}</p>
      </div>
    );
  };
  