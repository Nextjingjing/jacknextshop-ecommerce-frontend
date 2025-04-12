import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { setSearch } from '../slice/searchSlice'
import { useState } from 'react'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(setSearch(value))
    }
  }

  return (
    <div className="flex justify-center py-2 bg-gray-800">
      <div className="relative w-full max-w-7xl">
        <input
          type="text"
          placeholder="ค้นหาสินค้า..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none shadow-md"
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}

