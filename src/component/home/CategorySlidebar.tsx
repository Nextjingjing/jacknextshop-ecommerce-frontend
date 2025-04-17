import axios from "axios";
import { API_BASE } from "../../constants/api";
import { useEffect, useState } from "react";

type Category = {
    categoryId: number;
    name: string;
  };
  
  export default function CategorySlidebar() {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await axios.get(`${API_BASE}/api/category`);
          setCategories(res.data);
        } catch (e) {
          console.error("Error fetching category:", e);
          setCategories([]);
        }
      };
  
      fetchCategories();
    }, []);
    return (
      <div className="w-full overflow-x-auto whitespace-nowrap py-4 bg-white shadow-sm">
        <div className="inline-flex gap-3 px-4">
          {categories.map((category) => (
            <button
              key={category.categoryId + category.name}
              className="px-4 py-2 border rounded-full text-sm whitespace-nowrap border-blue-700 text-blue-700 hover:bg-blue-100 transition"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
  