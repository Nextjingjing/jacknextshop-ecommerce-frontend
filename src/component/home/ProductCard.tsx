type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  
  type ProductProps = {
    product: Product;
  };
  
  export const ProductCard = ({ product }: ProductProps) => {
    return (
      <div className="p-4 border-b-amber-50 rounded shadow text-center">
        <img src={product.image} alt={product.name} className="w-full h-[175px] object-contain mb-2" />
        <p className="font-bold">{product.name}</p>
        <p className="text-red-600">฿{product.price.toLocaleString()}</p>
      </div>
    );
  };
  