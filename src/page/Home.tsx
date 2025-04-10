import { useSelector } from 'react-redux'
import SearchBar from '../component/SearchBar'

const Home = () => {
  const searchInput = useSelector((state: any) => state.search.input)

  return (
    <>
      <SearchBar />
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
        HOME PAGE 🎉
      </div>
      <div className="mt-4 text-gray-800">
        <p>🔍 คำที่คุณค้นหา: <span className="font-semibold">{searchInput}</span></p>
      </div>
    </>
  )
}

export default Home
