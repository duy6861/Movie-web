import PropTypes from 'prop-types'
import { useState } from 'react'
const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="p-4 bg-slate-900 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="uppercase text-[35px] text-red-700 font-bold cursor-pointer" onClick={() => { window.location.reload(false); }}>Movie</h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-red-500 transition-all duration-300 ease-linear">Home</a>
          <a href="#" className="text-white hover:text-red-500 transition-all duration-300 ease-linear">About</a>
          <a href="#" className="text-white hover:text-red-500 transition-all duration-300 ease-linear">Contact</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" className=" p-3 text-black" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-500 rounded-md" onClick={() => onSearch(search)}>
          Search
        </button>
      </div>
    </div>
  )
}
Header.propTypes = {
  onSearch: PropTypes.func

}
export default Header