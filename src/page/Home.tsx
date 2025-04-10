import BestSeller from '../component/home/BestSeller'
import CategorySlidebar from '../component/home/CategorySlidebar'
import SearchBar from '../component/SearchBar'

const Home = () => {
  return (
    <>
      <SearchBar />
      <div className="w-full px-4 py-6">
      <BestSeller/>
        <div className="text-3xl sm:text-2xl lg:text-2xl font-bold text-blue-800 mb-4 text-left bg-blue-50 border border-blue-300 w-full px-4 py-2 rounded">
          กรองหมวดหมู่สินค้า
        </div>
        <div className="flex justify-center">
          <CategorySlidebar />
        </div>
      </div>
    </>
  )
}

export default Home
