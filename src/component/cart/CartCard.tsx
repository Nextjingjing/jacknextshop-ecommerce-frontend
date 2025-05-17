import React, { useState } from "react";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import axios from "axios";
import { API_BASE } from "../../constants/api";
import { useDispatch } from "react-redux";
import { AppDispatch} from "../../store/store";
import { clearItems, setItems } from "../../slice/cartSlice";


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
  const dispatch = useDispatch<AppDispatch>();
  const [isLocked, setIsLocked] = useState(true);
  const [value, setValue] = useState(product.amount);

  const handleLock = async () => {
    if (isLocked) {
      setIsLocked(false)
    } else {
      try {
        const res = await axios.put(
          `${API_BASE}/api/cart/${product.productId}/${value}`,
          {},
          {
            withCredentials: true,
          }
        );
        dispatch(setItems(res.data.products));
      } catch (error) {
        console.log(error)
      }
      setIsLocked(true)
    }
  }

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${API_BASE}/api/cart/${product.productId}`,
        {
          withCredentials: true,
        }
      );
      dispatch(setItems(res.data.products));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          dispatch(clearItems());
        } else {
          console.error('Unexpected Axios error:', error);
        }
      } else {
        console.error('Unknown error:', error);
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

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
      <div className="flex flex-col space-y-2">
        <input
          type="number"
          value={value}
          onChange={handleChange}
          disabled={isLocked}
          className="w-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        />
        {isLocked ?
          // edit btn
          (<button onClick={handleLock} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600">
            <PencilSquareIcon className="w-5 h-5" />
          </button>) // confirm btn
          : (<button onClick={handleLock} className="bg-gray-500 text-center text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600">
            <p>Confirm</p>
          </button>)}
        <button onClick={handleDelete} className="bg-red-500 text-center text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>


    </div>
  );
};

export default CartCard;
