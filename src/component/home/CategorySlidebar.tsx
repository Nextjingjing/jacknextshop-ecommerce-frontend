type Category = {
    id: number;
    name: string;
  };
  
  const categories: Category[] = [
    { id: 1, name: "ทีวี" },
    { id: 2, name: "พัดลม" },
    { id: 3, name: "แอร์" },
    { id: 4, name: "ตู้เย็น/ตู้แช่/ตู้แช่ไวน์" },
    { id: 5, name: "มือถือ/แท็บเล็ต" },
    { id: 6, name: "เครื่องซักผ้า" },
    { id: 7, name: "แล็ปท็อป" },
    { id: 8, name: "เครื่องทำน้ำอุ่น" },
    { id: 9, name: "เกม" },
    { id: 10, name: "นาฬิกา" },
    { id: 11, name: "ลำโพง" },
    { id: 12, name: "เครื่องเสียง" },
    { id: 13, name: "เสื้อผ้า" },
    { id: 14, name: "ของเล่น" },
    { id: 15, name: "เด็กทารก" },
    { id: 16, name: "อาหาร" },
    { id: 17, name: "อาหารสัตว์เลี้ยง" },
    { id: 18, name: "ตกปลา" },
    { id: 19, name: "กีฬา" },
    { id: 20, name: "อาหารเสริม" },
  ];
  
  export default function CategorySlidebar() {
    return (
      <div className="w-full overflow-x-auto whitespace-nowrap py-4 bg-white shadow-sm">
        <div className="inline-flex gap-3 px-4">
          {categories.map((category) => (
            <button
              key={category.id + category.name}
              className="px-4 py-2 border rounded-full text-sm whitespace-nowrap border-blue-700 text-blue-700 hover:bg-blue-100 transition"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
  