import axios from "axios";
import { API_BASE } from "../../constants/api";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type Category = {
    categoryId: number;
    name: string;
  };
  
  export default function CategorySlideBar() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchParams] = useSearchParams();
    const rawCategoryId = searchParams.get('categoryId');
    const categoryId: number | null = rawCategoryId ? parseInt(rawCategoryId) : null;
    const navigate = useNavigate();
    const handleClick = (id: number) => {
      const params = new URLSearchParams(searchParams);
      if(categoryId === id){
        params.delete("categoryId");
      }else{
        params.set("categoryId", String(id));
      }
      navigate(`?${params.toString()}`);
    }
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
              className={`px-4 py-2 border rounded-full text-sm whitespace-nowrap transition
                ${
                  categoryId === category.categoryId
                    ? "bg-blue-700 text-white border-blue-700"
                    : "border-blue-700 text-blue-700 hover:bg-blue-100"
                }`}
              onClick={() => handleClick(category.categoryId)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
  